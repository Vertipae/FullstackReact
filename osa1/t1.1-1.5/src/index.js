import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return (

        <p>{props.kurssi}</p>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osat[0]} />
            <Osa osa={props.osat[1]} />
            <Osa osa={props.osat[2]} />
        </div>


    )
}

const Yhteensa = (props) => {
    let summa = 0;
    props.osat.forEach(osa => {
        summa += osa.tehtavia;
    });
    return (
        <div>
            {/* Summa on käytössä kaikkialla funktion sisällä */}
            <p>Yhteensä {summa}</p>

        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa.nimi} {props.osa.tehtavia}</p>

        </div>
    )
}

const App = () => {
    // Kurssi ei ole olio, vaan osat on
    const kurssi = 'Half Stack -sovelluskehitys';
    
    const osat = [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10

        },

        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
        },

        {
            nimi: 'Komponenttien tila',
            tehtavia: 14
        }
    ]


    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osat={osat}/>
            <Yhteensa osat={osat}/>
            {/* <Sisalto osa={osa1} /> */}
            {/* <Sisalto osa={osa2} /> */}
            {/* <Sisalto osa={osa3} /> */}
            {/* <Yhteensa yht={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} /> */}
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
