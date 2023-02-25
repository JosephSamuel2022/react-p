import React from "react"
class AddContact extends React.Component{
    render(){
        return (
            <div>
                <h2>Add Contact</h2>
                <form className="form1">
                    <label>Name : </label>
                    <input type="text" name ="name"></input>
                    <br></br>
                    <label>Phone Number : </label>
                    <input type="number" name ="num"></input>
                </form>
            </div>
        )
    }
}
export default AddContact;