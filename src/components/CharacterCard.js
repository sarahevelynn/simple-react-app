import React, { Component } from 'react';

const CharacterCard = (props) => (
  <section>
    <img src="https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/4654/avatar-1577909_960_720.png" />
    <h1>Character Name: Luke Skywalker</h1>
    <p>Height: 170cm</p>
    <p>Eye Color: Brown</p>
    <button>Delete?</button>
  </section>
)

export default CharacterCard