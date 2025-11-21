import express from 'express';
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT = 5000;
dotenv.config();
app.use(cors());
app.use(express.json());


// Connecting to supabase
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


// middleware that verifies user token
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({ error: 'No authorization header!' })
    }

    // getting token from header
    const token = authHeader.split(' ')[1]

    if(!token){
        return res.status(401).json({ error: 'No Token!' })
    }

    // verifying user using token
    const { data: { user }, error} = await supabase.auth.getUser(token)

    if(error || !user){
        return res.status(401).json({ error: 'Invalid Token!' })
    }

    // passing user to routes 
    req.user = user
    next()
}

app.get('/', (req, res) => {
    res.send("Backend Working!")
});

app.get('/api/verify-token', authMiddleware, (req, res)=> {
    res.json({
        message:'User verified!',
        id: req.user.id,
        email: req.user.email
        
    })
})

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})