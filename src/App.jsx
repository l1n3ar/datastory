import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";




const Header = (props) => {

  return (
    <div className='w-full h-[5rem] bg-transparent flex justify-end'>
      {
        props.green && <img src="/header/cow-green.png" alt='header-img' className='w-30 h-15 p-4'></img>
      }
      {
        props.white && <img src="/header/cow-white.png" alt='header-img' className='w-30 h-15 p-4'></img>
      }

    </div>
  )
}


const createScript = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
  return script;
};

const foods = [
  {
    title: 'A',
    image: '/a.png',
    items: [
      {
        name: 'Lamb',
        value: '200g'
      },
      {
        name: 'Rice',
        value: '150g'
      },
      {
        name: 'Veggies',
        value: '600g'
      }
    ],
    eq: "1.5 Cubbon Parks",
    land: '26973'
  },
  {
    title: 'B',
    image: '/b.png',
    items: [
      {
        name: 'Poultry',
        value: '100g'
      },
      {
        name: 'Eggs',
        value: '5'
      },
      {
        name: 'Rice',
        value: '150g'
      },
      {
        name: 'Veggies',
        value: '600g'
      }
    ],
    eq: "2 x Lodhi Gardens",
    land: '10911'
  },
  {
    title: 'C',
    image: '/c.png',
    items: [
      {
        name: 'Beef',
        value: '200g'
      },
      {
        name: 'Rice',
        value: '150g'
      },
      {
        name: 'Veggies',
        value: '600g'
      }
    ],
    eq: "Half of central park in New York",
    land: '24013'

  },
  {
    title: 'D',
    image: '/d.png',
    items: [
      {
        name: 'Dairy',
        value: '500ml'
      },
      {
        name: 'Eggs',
        value: '6'
      },
      {
        name: 'Rice',
        value: '150g'
      },
      {
        name: 'Veggies',
        value: '600g'
      }
    ],
    eq: "Eden Gardens",
    land: '2624'
  },
  {
    title: 'E',
    image: '/e.png',
    items: [
      {
        name: 'Soybeans',
        value: '50g'
      },
      {
        name: 'Pulses',
        value: '100g'
      },
      {
        name: 'Rice',
        value: '150g'
      },
      {
        name: 'Veggies',
        value: '600g'
      }
    ],
    eq: "Chhatrapati Shivaji Maharaj Terminus, Bombay",
    land: '2332'
  },

]

const App = () => {
  const [selectedFood, setSelectedFood] = useState({
    title: "None"
  })

  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);

  useEffect(() => {
    const emissionsBySector = createScript("https://public.flourish.studio/resources/embed.js");

    return () => {
      document.body.removeChild(emissionsBySector);
    };
  }, []);

  const handleStartClick = () => {
    slide2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoClick = () => {

    slide3Ref.current.scrollIntoView({ behavior: 'smooth' });
    console.log("first")
  };

  const handleSelectedClick = (title) => {
    setSelectedFood(title)
  }

  return (
    <div className='overflow-y-scroll snap-y snap-mandatory h-screen'>

      <div className='Slide-1 w-screen h-screen bg-[url("/bg/slide-1.png")] bg-cover bg-no-repeat snap-center'>
        <Header green={true} />
        <div className='w-full py-[5rem] px-[20rem] h-3/4 flex flex-col gap-10'>
          <h1 className='text-6xl font-["Roboto_Condensed"] text-white w-1/3 font-semibold tracking-normal'>How your food is heating more than just your plate.</h1>
          <p className='text-2xl font-["Roboto"] text-white w-2/5 font-light tracking-wide'>An explorative analysis of how nitrous oxide emissions from agricultural practices and culinary choices are contributing to the rise in mean global temperature.</p>
        </div>
        <div className='w-full flex items-center justify-center '>
          <div onClick={handleStartClick} className='border rounded-lg p-2 font-["Roboto"] min-w-48 flex text-xl items-center justify-center border-[#68fdb5] text-[#68fdb5]  cursor-pointer hover:bg-[#68fdb5] hover:text-[#262626] transition-colors duration-700'>
            Start
          </div>
        </div>

      </div>

      <div ref={slide2Ref} className='Slide-2 w-screen h-screen  bg-[#35e38f] snap-center'>
        <Header white={true} />

        <div className='flex flex-col h-full w-full items-center py-10 justify-evenly'>


          <div className='flex gap-6 max-w-[70rem]'>
            <h1 className='w-2/3 text-[#262626] text-5xl font-bold font-["Roboto_Condensed"]'>Which of these bags would you choose for a day’s worth of grocery?</h1>
            <h2 className='w-1/3 text-right'>
              <span className="text-[#262626] text-xl font-normal font-['Roboto'] italic">For this exercise let's take a world average of </span>
              <span className="text-[#262626] text-xl font-normal font-['Roboto'] underline italic">2000-2500</span>
              <span className="text-[#262626] text-xl font-normal font-['Roboto'] italic "> Kcal as daily calorie requirement with 60g of protein.</span>
            </h2>
          </div>

          <div className='flex items-center justify-evenly w-[70rem] gap-2 '>
            {
              foods.map((food) => (
                <div key={food.title} className='flex flex-col items-center gap-10 justify-start h-full w-full'>
                  <div className='h-[3rem] w-[3rem] rounded-full flex items-center justify-center bg-gray-300 font-bold text-2xl'>{food.title}</div>
                  <div className={`h-[15rem] w-[12rem] p-4 flex flex-col gap-4 items-center justify-center border border-[#262626] rounded-lg cursor-pointer hover:-translate-y-2 duration-300 ${selectedFood.title == food.title ? 'border-dashed border-black border-2' : ''}`} onClick={() => handleSelectedClick(food)}>
                    <div className={`${food.title != 'A' || food.title != 'E' ? 'w-[5.5rem] h-[5.5rem]' : 'w-[1rem] h-[1rem]'} flex items-center justify-center`}>
                      <img src={food.image} alt='Food image' />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                      {
                        food.items.map((item, index) => (
                          <div key={index} className='flex gap-2 items-center'>
                            <h1 className='font-bold'>{item.name}</h1>
                            <p>{item.value}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div onClick={handleGoClick} className='border border-[#262626] rounded-lg min-w-48 p-2 bg-black text-white flex items-center text-xl justify-center cursor-pointer hover:bg-[#262626] hover:text-[#35e38f] transition-colors duration-700'>
            Go
          </div>
        </div>
      </div>

      <div ref={slide3Ref} className='Slide-3 w-screen h-screen   bg-[#262626] snap-center'>
        <Header green={true} />
        <div className='flex flex-col gap-12 items-center justify-center h-full w-full'>


          <h1 className=' text-5xl font-bold font-["Roboto_Condensed"] text-[#36E390]'>If you bought this bag everyday for the rest of your life, </h1>
          <div className='w-[60rem]'><img src='/slide-3.png' alt='slide-3' /></div>
        </div>
      </div>

      <div className='Slide-4 w-screen h-screen   bg-[url("/bg/slide-4.png")] bg-cover bg-no-repeat snap-center'>
        <Header green={true} />
        <div className='h-full w-full flex flex-col items-center justify-center '>
          <h1 className='max-w-[70rem] text-white text-5xl font-bold font-["Roboto_Condensed"]'>It would need <span className='underline'>{selectedFood.land}</span> sq. m of land to grow.
            That’s equivalent to the area of <span className='underline text-[#35e38f]'>{selectedFood.eq}</span>.</h1>
        </div>

      </div>

      <div className='Slide-5 w-screen h-screen bg-[url("/bg/blur.png")] bg-cover bg-no-repeat snap-center'>
        <Header green={true} />
        <div className='flex w-full h-full items-center justify-around'>
          <div className='w-[40rem] flex items-center justify-evenly'><div className="flourish-embed flourish-hierarchy w-full bg-transparent" data-src="visualisation/18940722"></div></div>
          <h1 className='w-[20rem] text-white text-5xl font-bold font-["Roboto_Condensed"]'>Look at how that <span className='text-[#36E390]'>compares to the land area</span> required to grow the other bags of grocery,</h1>

        </div>

      </div>

      <div className='Slide-6 w-screen h-screen bg-[url("/bg/slide-6.png")] bg-cover bg-no-repeat snap-center'>
        <Header green={true} />
        <div className='w-full h-[80vh] flex flex-col items-center justify-between '>
          <h1 className='font-["Roboto_Condensed"] text-white text-5xl font-bold'>29% of the surface of the earth is land</h1>
          <h1 className='font-["Roboto_Condensed"] text-neutral-400 text-5xl font-bold'>the rest 71% is ocean</h1>
        </div>
      </div>

      <div className='Slide-7 w-screen h-screen bg-[url("/bg/slide-7.png")] bg-cover bg-no-repeat snap-center'>
        <Header green={true} />
        <div className='w-full h-[80vh] flex flex-col items-center justify-between '>
          <h1 className='font-["Roboto_Condensed"] text-[#2F644B] text-6xl font-bold mt-10'>76% of this land is habitable</h1>
          <h1 className='font-["Roboto_Condensed"] text-[#EBEBEB] text-2xl font-bold ml-4'>the rest are glaciers and barren land</h1>
        </div>
      </div>

      <div className='Slide-8 w-screen h-screen bg-[url("/bg/slide-8.png")] bg-cover bg-no-repeat snap-center'>
        <Header green={true} />
        <div className='w-full h-[80vh] flex flex-col items-start justify-between px-[15rem]'>
          <div className='w-full'>
            <h1 className='font-["Roboto_Condensed"] text-4xl font-bold tracking-wide text-[#36E390] w-[20rem]'>45% of the habitable land is used for agriculture</h1>
          </div>
          <div className='w-full flex justify-between'>
            <p className='font-["Roboto_Condensed"] text-2xl   text-[#2F644B] w-[16rem]'>the rest are forests, shrubs, built-up land and fresh water bodies.</p>
            <div className='flex flex-col '>
              <h3 className='font-["Roboto_Condensed"] text-2xl font-bold text-right text-[#36E390] w-[16rem]'>80% of all agricultural land is used for livestock</h3>
              <p className='font-["Roboto_Condensed"] text-xl text-right  text-[#36E390] w-[16rem]'>(Feed + Grazing)</p>
            </div>

          </div>

        </div>
      </div>

      <div className='Slide-9 w-screen h-screen  flex items-center justify-center text-[#35e38f] font-["Roboto"] font-semibold text-5xl bg-[#262626] snap-center'>
        <div className='w-[60rem] font-["Roboto_Condensed"]'>
          <img src='/new/9.png' alt='slide-9' />
          so, only <span className='text-[#262626] bg-[#68fdb5]'> 17%</span> of global <span className='underline'> calorie supply </span> and <span className='text-[#262626] bg-[#68fdb5]'> 38% </span> of global <span className='underline'>protein supply </span>comes from 80% of our agricultural land which is <span className='text-white'>35% of all habitable surface of the planet.</span>
        </div>
      </div>

      <div className='Slide-10 w-screen h-screen   bg-[url("/bg/blur.png")]  text-white snap-center'>
        <Header green={true} />
        <div className='flex flex-col w-full items-center justify-around h-[80vh] '>


          <div className='flex flex-col items-center justify-center w-[60rem] gap-2'>

            <p className='text-5xl  font-bold font-["Roboto"]'>But, why are nitrogen fertilizers necessary? </p>
          </div>
          <div className='flex w-[70rem] items-center justify-evenly'>

            <div className='flex flex-col gap-6 items-center justify-center'>
              <img src='/slide-8-1.png' alt='slide-3' style={{ height: "100px" }} />
              {/* <div className='h-[10rem] w-[10rem] border border-white rounded-lg'></div> */}
              <p className='text-2xl  font-["Roboto"] font-bold'>Essential Nutrients </p>
              <p className='font-light font-["Roboto"] w-[12rem]'>Nitrogen is a major component of amino acids, which are the building blocks of proteins. It is also a crucial part of chlorophyll, the molecule that enables photosynthesis, allowing plants to convert sunlight into energy.</p>
            </div>

            <div className='flex flex-col gap-6 items-center justify-center'>
              <img src='/slide-8-2.png' alt='slide-3' style={{ height: "100px" }} />
              {/* <div className='h-[10rem] w-[10rem] border border-white rounded-lg'></div> */}
              <p className='text-2xl  font-["Roboto"] font-bold'>Crop Yields</p>
              <p className=' font-light font-["Roboto"] w-[12rem]'>Adequate nitrogen availability directly correlates with increased crop yields. Insufficient nitrogen can lead to poor plant growth, reduced leaf area, and lower biomass production, ultimately affecting the quantity and quality of the harvest.</p>
            </div>

          </div>
          <p className='text-xl w-[40rem] font-["Roboto"] text-[#68fdb5] font-light italic'>Natural soil often lacks sufficient nitrogen to meet the demands of high-yield crops, especially in intensive farming systems. As a result the world is increasingly relying on the use of synthetic fertilizers over natural ones to cope with the demands of the growing population.</p>
        </div>
      </div>

      <div className='Slide-11 w-screen h-screen snap-center bg-[#36E390]'>
          <Header white={true} />
            <img src = '/new/11.png' alt='slide-11' />

            <div className='w-full h-[80vh] px-[20rem] flex flex-col justify-evenly'>

            </div>
      </div>

      <div className='Slide-12 w-screen h-screen  bg-[url("/bg/blur.png")] gap-12 text-white font-["Roboto"] snap-center'>
        <Header green = {true} />
        <div className='flex flex-col items-center justify-center gap-12'>

        <h1 className='w-[60rem] text-white text-5xl font-bold '>The three major greenhouse gases in the atmosphere are Carbon Dioxide, Methane and Nitrous Oxide. </h1>
        <div className='w-[50rem]'>
          <img src='/slide-10.jpeg' alt='Graph' />
        </div>
        </div>
      </div>

      <div className='Slide-13 w-screen h-screen   bg-[#262626] bg-[url("/new/13.png")] bg-cover bg-no-repeat gap-12 text-white font-["Roboto"] snap-center'>
        <Header green = {true} />
       
      <div className='flex flex-col items-center justify-center h-[80vh] gap-10'>
        <h1 className='w-[50rem] text-white text-5xl font-bold font-["Roboto Condensed"]'>Today, Nitrous Oxide levels in the air are increasing rapidly.</h1>
        <Tabs defaultValue="linear" className="w-[50rem]">
          <TabsList>
            <TabsTrigger value="linear">Linear</TabsTrigger>
            <TabsTrigger value="log">Log</TabsTrigger>
          </TabsList>
          <TabsContent value="linear">
            <div className='w-[50]'>
              <img src='/linear.png' alt='Graph' />
            </div></TabsContent>
          <TabsContent value="log"> <div className='w-[50]'>
            <img src='/log.png' alt='Graph' />
          </div></TabsContent>
        </Tabs>
      </div>
      </div>

      <div className='Slide-14 w-screen h-screen  bg-[url("/bg/blur.png")]  text-white font-["Roboto"] snap-center'>
      <Header green={true} />
      <div className='h-[80vh] w-full flex flex-col items-center justify-center gap-12'>

     
        <h1 className='w-[69rem] text-white text-5xl font-bold font-["Roboto Condensed"]'>The Nitrous Oxide emissions from <span className='text-[#262626] bg-[#35e38f]'> agriculture </span> around the world contribute to a total of <span className=' text-[#262626] bg-[#35e38f]'>  67% </span> <span className='text-[#35e38f]'>  nitrous oxide emissions globally.</span> </h1>
        <div className='w-[50rem]'>
          <img src='/slide-12.png' alt='Graph' />
        </div>
        </div>
      </div>



      <div className='Slide-14 w-screen h-screen  flex flex-col items-center justify-center  bg-[#35e38f] gap-12 text-[#262626] font-["Roboto"] snap-center'>
        <h1 className='w-[50rem] text-5xl font-bold font-["Roboto"] leading-[3.4rem]'>
          It is not a coincidence that the countries with the <span className='underline'> highest cattle count </span> are also the countries with <span className='bg-white text-[#35e38f]'> highest Nitrous Oxide levels. </span>
        </h1>
        <p className='text-white w-[50rem] text-xl'>Amongst them however, there are disparities between cattle count and emissions owing to various factors such as policy changes (as in China) or average nitrogen efficiency in agriculture. </p>

      </div>

      <div className='Slide-15 w-screen h-screen  flex flex-col items-center justify-center bg-[#262626] gap-4 text-white font-["Roboto"] snap-center'>
        <h1 className='w-[55rem] text-white text-2xl font-bold font-["Roboto"]'>As countries become more prosperous, they increasingly depend on animal protein sources,  </h1>
        <div className='w-[50rem] flex items-center justify-center'><div className="flourish-embed flourish-hierarchy w-full" data-src="visualisation/18939006"></div></div>
        <h1 className='w-[55rem] text-[#68fdb5]  text-3xl font-semibold font-["Roboto"]'>creating a persistent cycle in which we struggle to find solutions that balance our dietary needs with planetary sustainability. </h1>
      </div>
    </div>
  );
};

export default App;
