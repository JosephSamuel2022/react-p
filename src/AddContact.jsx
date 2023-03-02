import React from "react"
class AddContact extends React.Component{
    state={
        name:"",
        number:""
    }//cannot create hook for class components, we directly use state
    
    add=(e)=>{
        e.preventDefault();//to prevent loading the page again
        if(this.state.name=="" || this.state.number==""){
            alert("All the fields are mandatory")
            return
        }
        this.props.addcontacthandler(this.state);//child using function as props to send to parent
        this.setState({name:"",number:""})

    }
    
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                <div className="field"><label>Name : </label>
                    <input type="text" name ="name" size="100" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input>
                    </div>
                    <div className="field"><label>Phone Number : </label>
                    <input type="number" name ="num" maxLength="10" size="100" value={this.state.number} onChange={(e)=>this.setState({number:e.target.value})}></input>
                    </div>
                    <button className="ui button blue" >Add</button>
                </form>
            </div>
        )
    }
}
export default AddContact;