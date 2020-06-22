setTimeout(getJson, 1);

function getJson() {
    fetch('https://covidtracking.com/api/v1/states/current.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            const places = data.length;
            let positive = 0,
                negative = 0,
                pending = 0;
            let html = '';
            for (let i = 0; i < places; i++) {
                if (data[i].state != "World") {
                    positive = positive + data[i].positive;
                    negative = negative + data[i].negative;
                    pending = pending + data[i].pending;
                }
            }

            html += ``;
            for (let i = 0; i < places; i++) {
                if (i % 3 == 0) {

                    html += `<div class="popup">
                    <div class="row">
                 <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:295px; height: 100%" >
                      <div class = "card-body" style="background:#111525">
                      <h2 class = "card-title" style="color:white;" >${data[i].state}</h2>
    
                      <h3 class = "card-title text-light" > Tested Positive :${data[i].positive} </h3> 
                      <h3 class = "card-title text-light" > Tested Negative :${data[i].negative} </h3> 
                      <h3 class = "card-title text-light" > Pending Results :${data[i].pending} </h3> 
                      <h3 class = "card-title text-light" > Currently Hospitalized :${data[i].hospitalizedCurrently} </h3> 
                      <h3 class = "card-title text-light" > Data Quality Grade :${data[i].dataQualityGrade} </h3> 
    
                  </div> 
                 </div>
                
                `;

                }
                if (i % 3 == 1) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:295px; height: 100%" >
                      <div class = "card-body" style="background:#111525">
                      <h2 class = "card-title" style="color:white;" >${data[i].state}</h2>
    
                      <h3 class = "card-title text-light" > Tested Positive :${data[i].positive} </h3> 
                      <h3 class = "card-title text-light" > Tested Negative :${data[i].negative} </h3> 
                      <h3 class = "card-title text-light" > Pending Results :${data[i].pending} </h3> 
                      <h3 class = "card-title text-light" > Currently Hospitalized :${data[i].hospitalizedCurrently} </h3> 
                      <h3 class = "card-title text-light" > Data Quality Grade :${data[i].dataQualityGrade} </h3> 
                    
                </div> 
                  </div>
                `;

                }
                if (i % 3 == 2) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:295px; height: 100%" >
                      <div class = "card-body" style="background:#111525">
                      <h2 class = "card-title" style="color:white;" >${data[i].state}</h2>
    
                      <h3 class = "card-title text-light" > Tested Positive :${data[i].positive} </h3> 
                      <h3 class = "card-title text-light" > Tested Negative :${data[i].negative} </h3> 
                      <h3 class = "card-title text-light" > Pending Results :${data[i].pending} </h3> 
                      <h3 class = "card-title text-light" > Currently Hospitalized :${data[i].hospitalizedCurrently} </h3> 
                      <h3 class = "card-title text-light" > Data Quality Grade :${data[i].dataQualityGrade} </h3> 
                    
                  </div> 
                  </div>
                  </div>
                  `;

                }
            }
            document.getElementById('virus').innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}
