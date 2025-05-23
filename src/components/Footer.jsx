import { FaFacebook, FaInstagram ,FaTwitter} from "react-icons/fa";
import {Link as RouterLink} from "react-router-dom";


function Footer() {
    return (
        <footer>
            <div className=" flex flex-col ">
                 <div className="grid md:grid-cols-5 sm:grid-cols-2  py-8 gap-3 px-8 text-gray-800 bg-gray-200 grid-cols-1">
                    {/*logo and address */}
                        <div className="space-y-3">
                            <img src="/images/logo.png"
                             alt="logo" 
                             className="md:w-40 w-32"
                             />
                        <p>256D, Southern City,<br /> New York, Usa
                        </p>
                            <div className='flex gap-3 text-2xl'> 
                                <FaFacebook className='hover:scale-105 transition duration-300' />
                                <FaInstagram  className='hover:scale-105 transition duration-300' />
                                <FaTwitter  className='hover:scale-105 transition duration-300' />
                            </div>
                        </div>

                    {/*service */}
                        <div className="space-y-4">
                            <h1 className=" text-2xl font-semibold text-green-900">Service</h1>
                            <ul className="space-y-3 ">
                                <li>
                                    <RouterLink to={"/property"} className="hover:text-blue-400 transition duration-300">
                                        Buy Property
                                    </RouterLink>
                                 </li>
                                <li>
                                     <RouterLink to={"/property"} className="hover:text-blue-400 transition duration-300">
                                        Sale Property
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to={"/property"} className="hover:text-blue-400 transition duration-300">
                                        Rent Property
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to={"/mortgage"} className="hover:text-blue-400 transition duration-300">
                                        Mortgage
                                    </RouterLink>
                                </li>
                            </ul>

                        </div>
                    {/*Information */}
                       <div className="space-y-4">
                         <h1 className="text-2xl font-semibold text-green-900">Information</h1>
                            <ul className="space-y-3">
                                <li>
                                  <RouterLink to="/" state={{ scrollTo: "about" }}>
                                     About
                                  </RouterLink>
                                </li>
                                <li> 
                                    <a className="hover:text-blue-400 transition duration-300">
                                        Service
                                    </a> 
                                </li>
                                 <li> 
                                    <a className="hover:text-blue-400 transition duration-300">
                                        contact
                                    </a> 
                                </li>
                            </ul>

                       </div>
                    {/*Support */}
                       <div className="space-y-4">
                        <h1 className="text-2xl font-semibold text-green-900">Support</h1>
                            <ul className="space-y-3">
                                <li> 
                                    <a className="hover:text-blue-400 transition duration-300">
                                      Privacy Policy
                                    </a>
                                </li>
                                <li>
                                     <a className="hover:text-blue-400 transition duration-300">
                                        Refund Policy
                                    </a>
                                </li>
                                <li> 
                                    <a className="hover:text-blue-400 transition duration-300">
                                        Our Agents
                                    </a>
                                </li>
                                <li>
                                     <a className="hover:text-blue-400 transition duration-300">
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                       </div>
                   {/*Subscribe */}
                        <div className="space-y-4">
                          <h1 className="font-semibold text-2xl text-green-900">Subscribe</h1>
                          <p>To get latest update, offers and subscribe now</p>
                          <input type="email" name="email" 
                          placeholder="Enter Your Email"
                          className="p-2.5 border-2 rounded-lg transition duration-300 focus:outline-none focus:border-blue-400"/>

                       </div>
                 </div>


                   <div className="flex items-center  bg-gray-300 py-2 justify-center">
                     <p className="  text-lg md:text-2xl ">&copy; {new Date().getFullYear()}  Retro Real Estate. All rights reserved.</p>
                  </div>
            </div>
        </footer>
    );
}

export default Footer;