import React ,{Component} from 'react';

export default class ImageGallery extends Component{

    constructor(props){
        super(props);

    }
 clickMeme =(event) =>{
    if(window.confirm("Would you like to vote for this Meme?"))
    {
        console.log('ok');
    }
 }
    render(){
        return(
            <div className="col-lg-3 col-md-4 col-sm-12">
                <a href="#" class="d-block mb-4 h-100">
                    <img src={`https://ipfs.infura.io/ipfs/${this.props.item}`}
                     width='200' height='200' className=" image-thumbnail" onClick={this.clickMeme} />
                    <span>User{this.props.id}</span><span style={{paddingLeft:"27%"}}><b>Votes:</b></span>
                 </a>
            </div>
        );
    }
}
