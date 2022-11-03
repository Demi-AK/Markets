
function generateView(date, month,pic,name,id,location,description,username,found=false,appliable=true,status='Pending'){
    return`      <div class="card-container" id="event_`+id+`">
    <div class="row border">
        <div class="col-md-6  d-flex justify-content-start ">
            <div class="photo-container">
                <div class="date">
                    <div class="day">`+date+`</div>
                    <div class="month">`+month+`</div>
                </div>
            </div>
            <img src='`+pic+`'" class="rounded-0" alt="...">
    
        </div>
  
        <div class="col-md-6">
            <div class="info-container d-flex justify-content-between">
                <div class ="event-content">
                    <div class="event-name">
                         `+name+`
                    </div>
                    <div class="event-location">
                        `+location+`
                    </div>
                    <div>
                    `+isFound(found)+`
                    `+isStatus(appliable,status)+`
                    </div>
                </div>
               
            </a>
           
                <a class="card-link float-right" data-bs-toggle="collapse" href="#collapseExample`+id+`"
                    aria-expanded="false" aria-controls="collapseExample`+id+`">
                    <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                </a>
            </div>
        </div>

    </div>
    <div class="row border">
        <div class="collapse" id="collapseExample`+id+`">
            <div class="card-body description">
                `+description+`
            </div>

           `+isAppliable(appliable,id,username,found)+`
        </div>
    </div>
</div>`;

}

function isAppliable(appliable,id,username,found){
    if(!appliable || found){
        return ``;
    }
    if(username!=null && !found){
        return `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#terms_`+id+`">Apply</button>`;
    }

    if(!found){
        return `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Apply</button>`;
    }
    
}
function isFound(found){
    if(found){
        return `<p class="text-success">You have applied</p>`;
    }
    return ``;
}
function generateMenu(username){
    return`<a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
    aria-expanded="false">
    `+username+`
   
</a>
<ul class="dropdown-menu text-small">
    <li><a class="dropdown-item" href="myApplications.html">My Applications</a></li>
    <li><a class="dropdown-item" href="myProfile.html">Profile</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a class="dropdown-item" href="#" onclick="logout();">Sign out</a></li>
</ul>`;
}

function isStatus(appliable,status){
    if(!appliable){
        return `<p>Status:`+status+`</p>`;
    }
    return ``;
}

function generateTermsModal(name ,id,terms,username){
    return `<div class="modal fade" id="terms_`+id+`" tabindex="-1" aria-labelledby="terms_Label`+id+`" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="terms_Label`+id+`">`+name+` Terms and Conditions</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          `+terms+`
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary btn_terms" id="btn_terms_`+id+`">Submit</button>
        </div>
      </div>
    </div>
  </div>`;

}

function getEventById(id){
    
    var day =$("#event_"+id+" .day").text();
    var month =$("#event_"+id+" .month").text();
    var location =$("#event_"+id+" .event-location").text();
    var description =$("#event_"+id+" .description").text();
    var name=$("#event_"+id+" .event-name").text();
    var pic = $("#event_"+id+" img").attr("src");
    var status = "Pending";
    return {"id":id,"day":day,"month":month,"location":location,"description":description,"pic":pic,"name":name,"status":status};

}

function logout(){
    localStorage.clear();
    window.location.reload();
}