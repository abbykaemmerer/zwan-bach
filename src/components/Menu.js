import React from 'react'
import './Menu.css';

function Menu() {
  return (
    <div className='menu-container'>
      <span className='header'>Menu</span>
      <div className='night-group friday'>
        <table>
          <thead>
            <tr>
              <th className='night-title' colSpan={3}>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr className='food-group'>
              <td>Lunch</td>
              <td>Dinner</td>
            </tr>
            <tr className='foods'>
              <td>Sandwiches</td>
              <td>Tacos</td>
            </tr>
            <tr className='foods'>
              <td>Veggies and hummus</td>
              <td>Chips & salas</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='night-group saturday'>
        <table>
          <thead>
            <tr>
              <th className='night-title' colSpan={3}>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr className='food-group'>
              <td>Breakfast</td>
              <td>Lunch</td>
              <td>Dinner</td>
            </tr>
            <tr className='foods'>
              <td>Omelets</td>
              <td>Sandwiches</td>
              <td>Tacos</td>
            </tr>
            <tr className='foods'>
              <td>Fruit salad</td>
              <td>Veggies and hummus</td>
              <td>Chips & salas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='night-group sunday'>
        <table>
          <thead>
            <tr>
              <th className='night-title' colSpan={3}>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr className='food-group'>
              <td>Breakfast</td>
              <td>Lunch</td>
            </tr>
            <tr className='foods'>
              <td>Bagels & cream cheese</td>
              <td>Sandwiches</td>
            </tr>
            <tr className='foods'>
              <td>Fruit</td>
              <td>Veggies and hummus</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className='night-group requests'>
        <span className='night-title'>Dietary restrictions, requests, etc.</span>
        <div className="form-container">
          <form
            action="https://formspree.io/f/xeqdqzjw"
            method="POST"
            encType="multipart/form-data"
          >
          <div className='names-container'>
              <div>
                  <label htmlFor="first-name">
                      <input type="text" placeholder="First Name" id="first-name" name="firstName"/>
                  </label>
              </div>
              <div>
                  <label htmlFor="last-name">
                      <input type="text" placeholder="Last Name" id="last-name" name="lastName"></input>
                  </label>
              </div>
          </div>
          <div className='checkboxes-container'>
            <span>
              <input type="checkbox" id="vegetarian" name="vegetarian"></input>
              <label htmlFor="vegetarian">Vegetarian</label>
            </span>
            <span>
              <input type="checkbox" id="vegan" name="vegan"></input>
              <label htmlFor="vegan">Vegan</label>         
            </span>
          </div>
          <div className='checkboxes-container'>
            <span>
              <input type="checkbox" id="gluten-free" name="gluten-free"></input>
              <label htmlFor="gluten-free">Gluten-free</label>
            </span>
            <span>
              <input type="checkbox" id="dairy-free" name="dairy-free"></input>
              <label htmlFor="dairy-free">Dairy-free</label>         
            </span>
          </div>
          <div className='textbox-container'>
            <textarea name="msg" placeholder="Special requests?" rows="2.5"></textarea>
          </div>
            <button type="submit"><span>Send</span></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Menu