import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  const nav = useNavigate();

  return (
    <div>
      <button onClick={() => nav('/detail/dg9861715788')}>Go to details. </button>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A mollitia, modi, saepe delectus ullam odio provident iusto in quaerat, excepturi ipsa veniam. Labore ab neque vero voluptatibus recusandae cum libero, odio repudiandae placeat. Minus beatae eos expedita nostrum, neque cum dolorum officia laudantium consequuntur consequatur rem, aspernatur harum magni repellendus illo laborum cupiditate. Veniam culpa sit exercitationem recusandae at animi asperiores explicabo velit laudantium, doloremque maxime aspernatur omnis a voluptas? Officiis corporis quasi enim? Earum cumque ad, blanditiis ratione rem officiis ullam sed odit repudiandae quidem nostrum tempore quod! Reprehenderit vero itaque aliquid pariatur, dolore ab nulla in alias excepturi laborum porro, rem dolorum quod asperiores? Reprehenderit suscipit ab dignissimos. Ipsam blanditiis optio at doloribus unde ratione hic totam officia cum, architecto dolorem temporibus necessitatibus delectus ab iusto distinctio? Inventore unde autem recusandae eius cumque eos facere esse natus deserunt soluta dolores, debitis quo est amet quisquam fugiat, ex accusantium! Facilis modi odit asperiores illo dignissimos consequatur voluptatibus! Delectus illum laborum earum molestiae, nobis, vel a illo facilis saepe perferendis animi architecto. Ipsam, deserunt vel placeat voluptate quisquam reiciendis debitis quam, est maiores impedit alias odit illo laborum dolor, totam in! Sequi possimus, architecto, reiciendis illum fugit unde dolor provident quasi corporis, dolorum quibusdam nesciunt dolorem. Iure ipsa possimus rerum eius nostrum quos earum laboriosam id expedita ullam impedit asperiores saepe vero molestiae tempora quam hic, quaerat, magnam qui similique provident et commodi! Libero, nulla! Repudiandae quos voluptatem ea non natus facere porro, quo iusto velit quia officia est ad consectetur vero dolores doloremque impedit?</p>

      <div className='h-72'>
      <dotlottie-player src="https://lottie.host/b5a09033-d269-4c38-9b76-8c930c786ffe/1GprLCBoln.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
      </div>
    </div>
  )
}

export default About
