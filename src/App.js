import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentWeekDay = currentDate.toLocaleString('default', { weekday: 'long' });
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();
  // console.log(currentSecond);
  
  let apiKey = "77a1a317ffca7091ad26e9d9d69c0601";

  const search = async()=>{
      const element = document.getElementsByClassName("placename");
      if(element[0].value === ''){
        return 0;
      }
      
      let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apiKey}`;
      let respone = await fetch(baseUrl);
      let data = await respone.json();
      const Humuinty = document.getElementsByClassName("hum")
  }

  return (
    <>
       <div className='weather-main'>
            <div className='weather-sub'>
                 <div className='row'>
                    <div className='col-7 p-0'>
                        <div className='weather-right'>
                            <div className='weather-right-top px-3 mb-5'>
                                <div className='row'>
                                    <div className='col'></div> 
                                    <div className='col text-white text-end'>
                                        <h5 className='mt-2 mb-0'>
                                              Jodhpur
                                        </h5>
                                        <h6>
                                              IN
                                        </h6>
                                    </div> 
                                </div>
                            </div>
                            <div className='blanck-div'></div>
                            <div className='weather-right-botom mt-5'>
                                <div className='row px-3'>
                                    <div className='col text-white'>
                                        <h4 className='mb-0'>
                                            {currentHour}: {currentMinute}: {currentSecond}
                                        </h4>
                                        <p className='mb-0'>
                                            {currentWeekDay}, {currentDay} {currentMonth} {currentYear}
                                        </p>
                                    </div> 
                                    <div className='col text-white text-end'>
                                        <h3>
                                            23 c
                                        </h3>  
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-5 p-0 text-white'>
                        <div className='weather-left px-3'>
                            <div className='weather-left-icon'>

                            </div>
                            <section>
                                  <h2 className='text-center'>
                                      Haze
                                  </h2>
                            </section>
                            <hr/>
                            <div class="search"> 
                                <input type="text" class="search-input placename" placeholder="Search..." name=""/> 
                                <a href="#" class="search-icon"> 
                                  <FontAwesomeIcon icon={faSearch}/> 
                                </a> 
                            </div> 
                            <section className='text-center mt-3'>
                                      City Name
                            </section>
                            <hr className='m-0'/>
                            <div className='row'>
                                <div className='col-6'>
                                    <p>
                                        Temp
                                    </p>
                                </div>
                                <div className='col-6 text-end'>
                                    23 c
                                </div>
                            </div>
                                <hr className='m-0'/>
                            <div className='row'>
                                <div className='col'>
                                    <p>
                                        Humuinty
                                    </p>
                                </div>
                                <div className='col text-end'>
                                    <p>
                                        38%
                                    </p>
                                </div>
                            </div>
                                  <hr className='m-0'/>
                            <div className='row'>
                                <div className='col'>
                                    <p>
                                        Visiblity
                                    </p>
                                </div>
                                <div className='col text-end'>
                                    3000 ml
                                </div>
                            </div>
                                  <hr className='m-0'/>
                            <div className='row'>
                                <div className='col'>
                                    <p>
                                        Wind speed 
                                    </p>
                                </div>
                                <div className='col text-end'>
                                    2 km/h
                                </div>
                            </div>
                        </div>
                    </div>
                 </div> 
            </div>
       </div> 
    </>
  );
}

export default App;
