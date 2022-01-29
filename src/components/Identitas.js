import React,{Component} from 'react'

export class Identitas extends Component {

    constructor(props) {
        super(props);
        this.state = {nama: "Ferdin" , 
                    kelas: "XII MIPA 2",
                    pagisiang: "Siang"}

    }

    render(){
        return(<div>
            <h3>
            Nama : {this.state.nama}<br/>
            Kelas : {this.state.kelas}<br/>
            Pagi/Siang : {this.state.pagisiang}
            </h3></div>
            
        )
    }
}