"use strict";
// alert("Everything is running smoothly!");
import "./styles.css";

const content_container = document.querySelector(`#content`);
const home = document.querySelector(`#home-btn`);
const menu = document.querySelector(`#menu-btn`);
const contact = document.querySelector(`#contact-btn`);

const displayHomePage = function () {
  const html = `
        <div class="description">
            <div class="title item">
                <h1>Beary's Breakfast Bar</h1>
            </div>
            <div class="paragraph item">
                <p>
                  Beary's has the best porridge! The atmosphere and customer service
                  make you feel like you are sitting in the middle of the woods, eating
                  like a bear! This is exactly the kind of place that I like to return
                  to again and again.
                </p>
            </div>
          </div>
          <div class="schedule item">
            <ul>
              <h3>Hours</h3>
              <li>Monday: 6am - 6pm</li>
              <li>Tuesday: 6am - 6pm</li>
              <li>Wednesday: 6am - 6pm</li>
              <li>Thursday: 6am - 10pm</li>
              <li>Friday: 6am - 10pm</li>
              <li>Saturday: 8am - 10pm</li>
              <li>Sunday: 8am - 8pm</li>
            </ul>
          </div>
          <div class="location item">
            <h3>Location</h3>
            <p>123 Forest Drive, Forestville, Maine</p>
        </div>
    `;
  content_container.innerHTML = html;
  home.classList.add("selected");
  menu.classList.remove("selected");
  contact.classList.remove("selected");
};

const displayMenuPage = function () {
  const html = `
    <h1>Menu</h1>
    <h2>Beverages</h2>
        <div class="beverages">
            <div class="item">
                <h5>Honey Tea</h5>
                <p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>
                <h5>$2</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>Beary Tea</h5>
                <p>A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.</p>
                <h5>$3</h5>
                <img src="" title=""/>
            </div>
        </div>
    <h2>Sides</h2>
        <div class="sides">
            <div class="item">
                <h5>Toast and Jam</h5>
                <p>A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</p>
                <h5>$1</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>Fresh Fruit</h5>
                <p>A small bowl of fresh fruit, whatever we find at the market for the day.</p>
                <h5>$3</h5>
                <img src="" title=""/>
            </div>
        </div>
    <h2>Main Dishes</h2>
        <div class="main_dishes">
            <div class="item">
                <h5>Pancakes</h5>
                <p>A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.</p>
                <h5>$4</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>French Toast</h5>
                <p>Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.</p>
                <h5>$5</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>Beary Veggie Sandwich</h5>
                <p>Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.</p>
                <h5>$8</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>BLT</h5>
                <p>Interested in the Beary Veggie Sandwich but also love bacon? Say no more.</p>
                <h5>$6</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>Bagel and Lox</h5>
                <p>Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</p>
                <h5>$8</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>HoneyComb</h5>
                <p>Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.</p>
                <h5>$6</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>Beary Bowl</h5>
                <p>Get a big ole bowl of our berries! Side of honey is $1 extra.</p>
                <h5>$7</h5>
                <img src="" title=""/>
            </div>
            <div class="item">
                <h5>The Beary Best Porridge</h5>
                <p>Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.</p>
                <h5>$5</h5>
                <img src="" title=""/>
            </div>
        </div>
    `;
  content_container.innerHTML = html;
  menu.classList.add("selected");
  home.classList.remove("selected");
  contact.classList.remove("selected");
};

const displayContactPage = function () {
  const html = `
    <h1>Contact Us</h1>
    <div class="contact-info item">
        <h5>Mama Bear</h5>
        <div class="contact-description">
            Chef
            555-555-5554
            totallyRealEmail@notFake.com
        </div>
    </div> 
    <div class="contact-info item">
        <h5>Papa Bear</h5>
        <div class="contact-description">
            Manager
            555-555-5555
            perfectlyRealEmail@notFake.com
        </div>
    </div> 
    <div class="contact-info item">
        <h5>Baby Bear</h5>
        <div class="contact-description">
            Waiter
            555-555-5556
            totallyRealEmail@notFake.com
        </div>
    </div> 
    `;
  content_container.innerHTML = html;
  contact.classList.add("selected");
  menu.classList.remove("selected");
  home.classList.remove("selected");
};

home.addEventListener("click", displayHomePage);
menu.addEventListener("click", displayMenuPage);
contact.addEventListener("click", displayContactPage);
displayHomePage();
