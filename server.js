#!/usr/bin/env node

import { roll } from './lib/roll.js';
import express from "express";
import minimist from "minimist";

const app = express();

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// Requirement 3
app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
  })
  
// Requirements 4 and 5
  app.get('/app/roll/', (req, res) => {
    res.send(roll(6,2,1));
  })

  app.post('/app/roll/', (req, res) => {
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);
    res.send(roll(sides,dice,rolls));
  })

// Requirement 6
app.get('/app/roll/:sides/', (req, res) => {
    const sides =  parseInt(req.params.sides);
    res.send((roll(sides, 2,1)));
  })

// Requirement 7
  app.get('/app/roll/:sides/:dice/', (req, res) => {
    const sides =  parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    res.send((roll(sides, dice,1)));
  })

// Requirement 8
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    const sides =  parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls)
    res.send((roll(sides, dice,rolls)));
  })

// Requirement 2
app.get("*",(req, res) => {
	res.status(404).send("404 NOT FOUND");
})

app.listen(port);

