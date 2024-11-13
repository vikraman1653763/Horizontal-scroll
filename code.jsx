import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import './exx.css'

function Section5() {

const  features =    [
        {
          "title": "Precision Spraying",
          "description": "Optimized for even distribution of fertilizers and pesticides, ensuring healthier crops.",
          "image": "/assets/dealer1.webp"
        },
        {
          "title": "Smart Monitoring",
          "description": "Equipped with advanced sensors for real-time field data collection.",
          "image": "/assets/dealer2.webp"
        },
        {
          "title": "Easy Operation",
          "description": "User-friendly controls with autonomous and manual flight modes.",
          "image": "/assets/dealer3.webp"
        },
        {
          "title": "Durable Design",
          "description": "Built to withstand tough weather conditions with enhanced wind resistance.",
          "image": "/assets/dealer4.webp"
        },
        {
          "title": "Cost-Effective",
          "description": "Reduces labor costs and minimizes resource wastage.",
          "image": "/assets/dealer5.webp"
        },
        {
          "title": "Geo-Fencing",
          "description": "Stay compliant with geo-fencing technology for restricted areas.",
          "image": "/assets/dealer6.webp"
        },
        {
          "title": "Failsafe Mechanisms",
          "description": "Return-to-Launch (RTL) and low battery emergency landing features for safe operations.",
          "image": "/assets/dealer4.webp"
        }
      ]

      const targetRef = useRef(null);
  // Framer Motion's scroll and transform hooks
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Direct horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);

  return (
    <section className='sec-5' > 
    <div className="buffer"></div>
      <div className='sec-5-container' ref={targetRef}>
        <div className='sec-5-container-sticky'>
      <h2 className="title"> Why AGR-16 <span>?</span></h2>
        <motion.div className="sec-5-scroll-content" style={{ x }}>

        {features.map((feature,index)=>{
          return(
          <div className='sec-5-card' key={index} style={{backgroundImage:`url(${feature.image})`}}>
                <h2>0{index+1}</h2>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>
        )})}

        </motion.div>

        </div>
      </div>
      <div className="buffer"></div>
    </section>
  )
}

export default Section5


// style for this section 



// .sec-5 {
//   color: #000000;
//   background-color: rgb(245, 238, 215);
  
// }

// .sec-5-container {
//   margin-bottom: 20px;
// height: 500vh;
// position: relative;
// padding: 0em 13rem;
// }

// .sec-5-container-sticky {
//   position: sticky;
//   top: 25%;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   align-items:flex-start;
//   justify-content: flex-start;
//   overflow: hidden;
//   border-radius: 1em;

// }
// .sec-5-container-sticky .title{
//   background: linear-gradient(to top, #c139eb,#c139eb, #f10317);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
 
//   font-weight: normal;
//   font-size: var(--fs-xxl);
//   margin-bottom: 1em;
// }
// .sec-5-container-sticky .title span{
//   background: linear-gradient(to top, #c139eb,#c139eb, #f10317);
//   font-weight: 900;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }
// .sec-5-scroll-content {
//   display: flex;
//   gap: 32px;
//   width: 300vw;

// }

// .sec-5-card {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
  
//   width: 50vw;
//   height: 50vh;
//   border-radius: 1em;
//   transition: all .3s ease-in-out;
//   overflow: hidden;

// }
// .sec-5-card ::before{
//   z-index: -1;
//   content: '';
//   width: 100%;
//   height: 100%;
//   background-color: #00000044;
//   position: absolute;
//   top: 0%;
//   left: 0%;
//   transition: all .3s ease-in-out;

// }

// .sec-5-card:hover {
//   transition: all .3s ease-in-out;
//   transform: scale(1.05);
// }
// .sec-5-card:hover > h2{
//   background: linear-gradient(to top, #c139eb,#c139eb, #f10317);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   border-radius: 0%;
// }
// .sec-5-card h2 {
//   font-size: var(--fs-xxxl);
//   font-weight: 800;
//   border-radius: 0%;
//   line-height: 100%;
//   margin-bottom: 0em;
//   color: aliceblue;

// }
// .sec-5-card h3{
//   font-size: var(--fs-m);
//   color: white;


// }
// .sec-5-card p{
//   font-size: var(--fs-s);
//   color: white;


// }

// .buffer{
//   height: 100vh;
// }