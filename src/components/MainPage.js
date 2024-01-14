import React from 'react';

import vpbuild from './vpbuild.jpg';

export default function MainPage() {
  return (
      <div>
    <h1>Vidyalankar Polytechnic</h1>
    <p>"Empower your educational journey with<br/>
         Campus Navigation | Smart Attendence System | Seamless Classroom Allocation "</p>
         <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={vpbuild} class="card-img-top" alt="Campus Navigation"/>
      <div class="card-body">
        <h5 class="card-title">Campus Navigation</h5>
        <p class="card-text">Navigate your campus effortlessly with interactive indoor navigation, guiding you to your destinations and providing a user-friendly, engaging experience.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">

<img src={vpbuild} className="card-img-top" alt="Attendance System" />

      <div class="card-body">
        <h5 class="card-title">Attendance System</h5>
        <p class="card-text">Gain insights into your academic journey  and understand your academic progress through a personalized and insightful  personalized tool offering real-time feedback experience  personalized tool offering real-time feedback.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={vpbuild} class="card-img-top" alt="Classroom Allocation"/>
      <div class="card-body">
        <h5 class="card-title">Classroom Allocation</h5>
        <p class="card-text">Effortlessly track and manage classroom allocation status, enabling users to check availability and edit allocations for seamless scheduling and organization.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
