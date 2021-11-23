/************profil**************/
function logout() {
    console.log(fetch('http://localhost:5000/api/user/logout'));
	
        localStorage.removeItem('user');
   
}
const pseudo = document.getElementById('pseudo');

if (fetch('localhost:5000/jwtid')) {
    
fetch('http://localhost:5000/api/user/' + JSON.parse(localStorage.getItem('user')))
	.then((res) => res.json())
	.then((data) => {
		var html = `

    <div class="row">
    <div class="col-lg-4 col-md-6 mb-4 pt-5">
        <div class="card shadow-sm border-0">
            <div class="card-body">
                <div class="user-picture">
                    <img src="https://www.placecage.com/640/360" class="shadow-sm rounded-circle" height="130" width="130" /></br></br>
                </div>
                <div class="user-content">
                    <h5 class="text-capitalize user-name">id :  ${data._id}</br></br>Pseudo : ${data.pseudo}</h5>
                    </br> <p class=" text-capitalize text-muted small blockquote-footer">${data.email}</p>
                    <div class="small">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="fas fa-star text-light"></i>
                    </div>
                    <p class="small text-muted mb-0">date de creation :${data.createdAt} .</p></br>
                    <p class="small text-muted mb-0">date de modif : ${data.updatedAt}</p></br>
                    <a href="put.html">modifier le pseudo</a>
                </div>
            </div>
        </div>
    </div>

    `;
		pseudo.innerHTML = html;
	});



}




