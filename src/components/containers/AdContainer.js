import React from 'react';

export const AdContainer = ({
    adUrls
}) => {
    return(
        adUrls.map((url,index) => (<div key={index} className="bg-white">
                                        <div className="p-2">
                                            <img className="img-fluid" src={url}/>
                                        </div>
                                    </div>)
                    )   
    )
}