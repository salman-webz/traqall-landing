'use client'
import CounterUp from "@/components/elements/CounterUp"
export default function Funfact() {
    return (
        <>
        {/* Start Counter One*/} 
        <section className="counter-one">
            <div className="container">
                <div className="counter-one__inner">
                    <div className="counter-one__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/counter-v1-bg.jpg)' }} ></div>
                    <div className="row">

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            {/* Start Counter One Single*/} 
                            <div className="counter-one__single">
                                <div className="icon-box">
                                    <span className="icon-user-experience"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-box">
                                        <h2> <CounterUp end={20} /></h2>
                                        <span>+</span>
                                    </div>
                                    <p>Services Year</p>
                                </div>
                            </div>
                        </div>
                        {/* End Counter One Single*/} 

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                            data-wow-duration="1500ms">
                            {/* Start Counter One Single*/} 
                            <div className="counter-one__single">
                                <div className="icon-box">
                                    <span className="icon-award"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-box">
                                    <h2> <CounterUp end={15} /></h2>
                                        <span>+</span>
                                    </div>
                                    <p>Awards Received</p>
                                </div>
                            </div>
                        </div>
                        {/* End Counter One Single*/} 

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                            data-wow-duration="1500ms">
                            {/* Start Counter One Single*/} 
                            <div className="counter-one__single">
                                <div className="icon-box">
                                    <span className="icon-thumb-up"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-box">
                                    <h2> <CounterUp end={30} /></h2>
                                        <span>+</span>
                                    </div>
                                    <p>Project Completd</p>
                                </div>
                            </div>
                        </div>
                        {/* End Counter One Single*/} 

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                            data-wow-duration="1500ms">
                            {/* Start Counter One Single*/} 
                            <div className="counter-one__single">
                                <div className="icon-box">
                                    <span className="icon-salary"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-box">
                                    <h2> <CounterUp end={8} /></h2>
                                        <span>+</span>
                                    </div>
                                    <p>Earning Year</p>
                                </div>
                            </div>
                        </div>
                        {/* End Counter One Single*/} 
                    </div>
                </div>
            </div>
        </section>
        {/* End Counter One*/} 
        </>
    )
}
