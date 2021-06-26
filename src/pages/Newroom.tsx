import { Link, useHistory } from 'react-router-dom'
import { Button } from '../components/Button'
import { FormEvent, useState } from 'react'

import { useAuth } from '../hooks/useAuth';
import { database,  } from '../services/firebase';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";


import '../styles/auth.scss'

export function NewRoom() {

  const { user } = useAuth()
  const [newRoom, setNewRoom] = useState('')
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent ) {

      event.preventDefault();

      if(newRoom.trim() === '' ) {        
        return;
      }

      const roomRef = database.ref('rooms');
      
      const firebaseRooms = await roomRef.push({
        title: newRoom,
        authorId: user?.id,
      })

      history.push(`/Rooms/${firebaseRooms.key}`)
    
  }

    return(
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustraçao simbolizando perguntas e resposta"
        />
        <strong>Crie sua sala de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas de sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          {/* fazer um card para mostra que esta logando!! */}
          <h2>Crie uma nova sala</h2>             
          <form onClick={handleCreateRoom}>
            <input 
            type="text" 
            placeholder="Nome da sala"
            onChange={ event => setNewRoom(event.target.value)}
            value={newRoom} />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala ja existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}
