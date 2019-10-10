import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            skillsList: []
        };
    }

    componentDidMount() {
        fetch('./data/skills.json')
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        skillsList: data
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
       const { error, isLoaded, skillsList } = this.state;

       if (error) {
           return <div>Error: {error.message}</div>;
       } else if (!isLoaded) {
           return <div>Loading...</div>;
       } else {
           return (
               <>
               <div className="skills-maintitle"><h2>My Speciality <span>My Skills</span></h2></div>
                <div className="skills-maincontainer"> 
                        {skillsList.map((skill, index) => (
                            <div key={index} className="skills-container">
                                
                                <img className="skills-img" src={skill.image} alt={skill.skill} />
                                <p className="">
                                    <span className="skill-title">{skill.skill}</span> 
                                    <span className="skill-description">{skill.description}</span>
                                </p>
                            </div>
                        ))}
                </div>
                </>
           )
       }
   }
}

export default Skills;