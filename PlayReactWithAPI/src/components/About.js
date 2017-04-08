import React, { Component } from 'react';
import PouchDB from 'pouchdb';

class About extends Component {
    constructor(props) {
        super(props);
        this._db = null;
    }



    componentWillMount() {
        this._db = new PouchDB('playreactwithapi');
        this._db.info().then(function (info) {
            console.log(info);
        });

        // var doc = {
        //     "_id": "toan",
        //     "name": "NTT",
        //     "occupation": "kitten",
        //     "age": 3,
        //     "hobbies": [
        //         "playing with balls of yarn",
        //         "chasing laser pointers",
        //         "lookin' hella cute"
        //     ]
        // };
        // db.put(doc);

        // db.get('toan').then(function (doc) {
        //     console.log(doc);
        // });
    }

    componentWillUnmount() {
        this._db.close().then(function () {
            console.log('closed');
        });
    }


    render() {
        return (
            <div>
                Hello from About Page
            </div>
        );
    }
}

export default About;