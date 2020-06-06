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
                style = "width:295px" >
                  <div class = "card-body" style="background:#D0D0D0">
                  <h1 class = "card-title" style="color:black;" >${data[i].state}</h1>

                  <h4 class = "card-title text-dark" > Tested Positive :${data[i].positive} </h4> 
                  <h4 class = "card-title text-dark" > Tested Negative :${data[i].negative} </h4> 
                  <h4 class = "card-title text-dark" > Pending Results :${data[i].pending} </h4> 
                  <h4 class = "card-title text-dark" > Currently Hospitalized :${data[i].hospitalizedCurrently} </h4> 
                  <h4 class = "card-title text-dark" > Data Quality Grade :${data[i].dataQualityGrade} </h4> 

                  </div> 
                 </div>
                
                `;

                }
                if (i % 3 == 1) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                <div class = "card-body" style="background:#D0D0D0">
                  <h1 class = "card-title" style="color:black;" >${data[i].state}</h1>

                  <h4 class = "card-title text-dark" > Tested Positive :${data[i].positive} </h4> 
                  <h4 class = "card-title text-dark" > Tested Negative :${data[i].negative} </h4> 
                  <h4 class = "card-title text-dark" > Pending Results :${data[i].pending} </h4> 
                  <h4 class = "card-title text-dark" > Currently Hospitalized :${data[i].hospitalizedCurrently} </h4> 
                  <h4 class = "card-title text-dark" > Data Quality Grade :${data[i].dataQualityGrade} </h4> 
                  
                </div> 
                  </div>
                `;

                }
                if (i % 3 == 2) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                <div class = "card-body" style="background:#D0D0D0">
                <h1 class = "card-title" style="color:black;" >${data[i].state}</h1>

                <h4 class = "card-title text-dark" > Tested Positive :${data[i].positive} </h4> 
                <h4 class = "card-title text-dark" > Tested Negative :${data[i].negative} </h4> 
                <h4 class = "card-title text-dark" > Pending Results :${data[i].pending} </h4> 
                <h4 class = "card-title text-dark" > Currently Hospitalized :${data[i].hospitalizedCurrently} </h4> 
                <h4 class = "card-title text-dark" > Data Quality Grade :${data[i].dataQualityGrade} </h4> 
                
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
