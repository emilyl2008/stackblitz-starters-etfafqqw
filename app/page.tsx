import Image from 'next/image';

export default function Home() {
  return (
   <div className='conteiner'>
     
     <h1 className='titulo'> DOCERIA</h1>
    
     <img className='img' src="logodoce.jpg" alt="" />

<div className='conteiner2'>

      <div className="produto">
        <img src="doce1.jpg" alt="250" />
        <p></p>
        <h3></h3>
      </div>

      <div className="produto">
        <img src="doce2.jpg" alt="250" />
        <p></p>
        <h3></h3>
      </div>

      <div className="produto">
        <img src="doce3.jpg" alt="250" />
        <p></p>
        <h3></h3>
      </div>

      <div className="produto">
        <img src="doce4.jpg" alt="250" />
        <p></p>
        <h3></h3>
      </div>

      <div className="produto">
        <img src="doce5.jpg" alt="250" />
        <p></p>
        <h3></h3>
      </div>

      <div className="produto">
        <img src="doce6.jpg" alt="250" />
        <p></p>
        <h3></h3>
      </div>
      
      </div>

      <footer className="rodape">
      <p>Integrantes: Emily,Evilyn,gabriel    Turma:2003 </p>
    </footer>

   </div>
  );
}
