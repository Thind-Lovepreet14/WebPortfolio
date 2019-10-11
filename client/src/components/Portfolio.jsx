import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            portfolioList: []
        };
    }

    componentDidMount() {
        fetch('./data/work.json')
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        portfolioList: data
                    });
                })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            })
                
    }

   render() {
       const { error, isLoaded, portfolioList } = this.state;

       if (error) {
           return <div>Error: {error.message}</div>;
       } else if (!isLoaded) {
           return <div>Loading...</div>;
       } else {
           return (
               <>
               <div id="portfolio" className="skills-maintitle"><h2>My Work <span>Projects</span></h2></div>
               <div className="wrapper">
                <div className="portfolio-maincontainer"> 
                        {portfolioList.map((work, index) => (
                            <div key={index} className="portfolio-container">
                                <img className="project-img" src={work.image} alt={work.project} />
                                <div className="overlay">
                                    <a href={work.link} target="_blank">{work.project}</a>
                                </div>
                            </div>
                        ))}
                </div>
                </div>
                </>
           )
       }
   }
}

export default Portfolio;