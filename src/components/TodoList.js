
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { addTodos, deleteOneData, fatchUserData } from '../Redux/TodoApp/acction'



const TodoList = (props) => {

    // const [id, idchange] = useState(0);
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const [showNo, setShowNo] = useState({ first: 0, last: 5 })
    const { first, last } = showNo

    useEffect(() => {
        props.datafatch()
    }, [])


    const handleSubmit = (e) => {

        e.preventDefault()
        const userobj = { name };
        dispatch(addTodos(userobj));
        setTimeout(() => {
            props.datafatch()
            setName('')
        }, 400)
        // Create unic ID---- 
        // let date = new Date()
        // let time = date.getTime()
        // let todoObj = {
        //     id: time,
        //     todo: todoValue
        // }
        // setTodoValue(" ")
        // dispatch(addTodo(todoObj))
    }

    const delete_handler = (code) => {
        props.removeuser(code)
        props.datafatch()
    }


    // Pagination (first 0-----Last 5)
    const handlePagination = (typ) => {
        if (typ == 0) {
            setShowNo({ first: first - 5, last: last - 5 })
        } else {
            setShowNo({ first: first + 5, last: last + 5 })
        }
    }
    // const todoData = useSelector((state) => state.operationReducer);
    // console.log(todoData)
    return (
        <>
            <form className='form-group custom-form' onSubmit={handleSubmit}>
                <label>Add your todo-items</label>
                <div className='input-and-btn'>

                    <input type="text" placeholder='Enter a Name...' className='form-control' required
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
                </div>
            </form>
            {
                props.user.loading ? <div><img src="/assets/200w-unscreen.gif" alt="" /> </div> :
                    props.user.userlist.slice(first, last).map((item) => (
                        <div key={item.id} className='todo-box'>
                            <div className='content'>
                                {item.id}. <p>{item.name}</p>
                            </div>

                            <button onClick={() => { delete_handler(item.id) }}>X</button>

                        </div>
                    ))
            }
            <div className='nextPrev'>
                <button className='btn btn-danger' disabled={first <= 0} onClick={() => handlePagination(0)}>&#8249;</button>
                <button className='btn btn-danger ms-5' disabled={props.user.userlist.length <= last} onClick={() => handlePagination(1)}>&#8250;</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datafatch: () => dispatch(fatchUserData()),
        removeuser: (code) => dispatch(deleteOneData(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
