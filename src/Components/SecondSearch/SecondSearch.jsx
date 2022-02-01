import React from "react";

import './SecondSearch.scss'

import { NavLink } from "react-router-dom";

import morePic from '../../Assets/images/morePic.jpg'


function SecondSearch() {
      return(
          <>
             <div className="search s2search">
                <form action="Post">
                        <input className="search__input" type="text" placeholder="Search Twitter"/>
                    </form>
                    <img className="s2search__morePic" src={morePic} alt="" />

                    <div className="search__cardLike">
                            <h2 className="search__likeTitle">You might like</h2>

                            <div className="search__cardFollow">
                                   <span><NavLink className="search__followPic" to=""></NavLink></span>
                                   <div className="search__profileLink">
                                       <NavLink to="">Mushtariy</NavLink>
                                       <NavLink to="">@Mushtar565266</NavLink>
                                   </div>
                                   <button className="search__btn4">Follow</button>
                            </div>
                            
                            <div className="search__cardFollow1">
                                   <span><NavLink className="search__followPic1" to=""></NavLink></span>
                                   <div className="search__profileLink">
                                       <NavLink to="">Shuhratbek</NavLink>
                                       <NavLink to="">@mrshukhrat</NavLink>
                                   </div>
                                   <button className="search__btn4">Follow</button>
                            </div>
                            <br />
                           
                          
                            <NavLink className="search__shows" to="">Show more</NavLink>
                       
                  </div>
                  <div className="search__card">
                         <div className="search__title">
                               <h2 className="search__heading">Trends for you</h2>
                               <span><NavLink className="search__setting" to=""></NavLink></span>
                         </div>
                         <div className="search__ListOfRevolution">
                              <div className="search__treadings">
                                 <li className="search__tweets">Trending in Germany</li>
                                 <li><NavLink className="search__infoTreading" to=""></NavLink></li>
                              </div>
                              <li className="search__revolution">Revolution</li>
                              <span>50.4K Tweets</span>
                              <div className="search__treadings">
                                 <li className="search__tweets">Trending in Germany</li>
                                 <li><NavLink className="search__infoTreading" to=""></NavLink></li>
                              </div>
                              <li className="search__revolution">Revolution</li>
                              <span>50.4K Tweets</span>
                              
                              <div className="search__treadings">
                                 <li className="search__tweets">Trending in Germany</li>
                                 <li><NavLink className="search__infoTreading" to=""></NavLink></li>
                              </div>
                              <li className="search__revolution">Revolution</li>
                              <span className="search__tweet">50.4K Tweets</span>
                              
                              
                         </div>
                         <br />
                         <NavLink className="search__show" to="">Show more</NavLink>
                  </div>
             </div>
          </>
      )
}

export default SecondSearch;