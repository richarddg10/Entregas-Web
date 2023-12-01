import React from "react";
import '../Members/Members.css'

import { MembersImgs } from '../../components'
import infoMembers from "../../infoDocs/infoMembers";

export function Members() {
    return (
        <>
            {
                infoMembers.map(({id, imgRut, memberName, memberInfo, skill1, skill2, skill3, contactURL1, contactImg1, contactURL2, contactImg2, contactURL3, contactImg3})=> {
                    return (
                        <div key={id} className='global-member-div'>
                            <MembersImgs imgRut={imgRut} />
                            <div className='info-member-div'>
                                <h2 className='memberTittle'>My name is <span className='nameSpan'>{memberName}</span></h2>
                                <p className='memberInfo'>{memberInfo}</p>
                                <div className='extra-info-div'>
                                    <h2 className='skillsTittle'>Skills
                                        <span className='skillsSpan'>
                                            <ul className='skillsList'>
                                                <li>{skill1}</li>
                                                <li>{skill2}</li>
                                                <li>{skill3}</li>
                                            </ul>
                                        </span>
                                    </h2>
                                    <h2 className='contactMemberTittle'>Contact
                                        <span className='contactSpan'>
                                            <a href={contactURL1}><img src={contactImg1}/></a>
                                            <a href={contactURL2}><img src={contactImg2}/></a>
                                            <a href={contactURL3}><img src={contactImg3}/></a>
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}