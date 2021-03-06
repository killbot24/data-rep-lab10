import React from 'react';
import axios from 'axios';
export class Create extends React.Component {//Returns below text when called
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: '',
        }

    }
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        alert("Movie:" + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
        const newMovie={
            Title:this.state.Title,
            Year:this.state.Year,
            Poster:this.state.Poster
        }
        axios.post('http://localhost:4000/api/movies',newMovie).then((res)=>{//Posts up new movies
            console.log(res);//Response
        })
        .catch((err)=>{//If error
            console.log(err);
        });
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title</label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year</label>
                        <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Poster</label>
                        <input type='text' className='form-control' value={this.state.Poster} onChange={this.onChangePoster}></input>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add Movie' className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}