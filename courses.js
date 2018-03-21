class Course {
    constructor(title, credits, professor, overall_rating) {
        this.title = title;
        this.credits = credits;
        this.professor = professor;
        this.overall_rating = overall_rating;
    }
}

var initialized;
var courses;

function init(){
	if(!initialized){
		/* Dumby Data */
		courses = [ new Course("CSCE230", "2", "Witty", "4.5"),
                	new Course("CSCE361", "1", "Rothermel", "4.0"),
			new Course("CSCE156", "5", "Patrick", "3.0"), 
               		new Course("CSCE235", "4", "Hasan", "3.0"),
                	new Course("CSCE423", "3", "Scott", "4.0"),
			new Course("CSCE451", "3", "Lu", "3.1"),
			new Course("CSCE422", "3", "Vinod", "5.0"),
			new Course("CSCE452", "4", "Clark", "2.3"),
			new Course("MATH102", "3", "Squarebush", "5.0"),
			new Course("MATH106", "4", "Jones", "4.0"),
			new Course("MATH103", "3", "Smith", "3.0"),
			new Course("MATH101", "3", "Appleseed", "2.0"),
			new Course("MATH107", "3", "Brown", "3.0"),
			new Course("MATH206", "3", "Johnson", "2.0"),
			new Course("MATH207", "3", "Williams", "4.5"), 
			new Course("MATH208", "3", "Miller", "3.4"),
			new Course("GEOG101", "5", "Hall", "NA"),
			new Course("PSYCH108", "3", "Green", "NA"),
			new Course("ART103", "3", "Adams", "NA"),
			new Course("COMP120", "3", "King", "NA"),
			new Course("GEOG208", "4", "Wright", "NA"),
			new Course("ASTR215", "3", "Tryniski", "NA"),
			new Course("PSYCH109", "3", "Baker", "NA"),
			new Course("ART250", "5", "Thompson", "NA")
		];
		var cart_courses = [0, 1];
		saveCart(cart_courses);
		initialized = true;
	}

}

function getCartCourses(){
	var cart_courses = sessionStorage.getItem("cart_courses");
	return JSON.parse(cart_courses);
}

function addCartCourse(id){
	var cart_courses = getCartCourses();
	cart_courses.push(id);
	saveCart(cart_courses);	
}

function deleteCartCourse(id){
	var cart_courses = getCartCourses();
	var id_index = cart_courses.indexOf(id);
	if (id_index > -1) {
		cart_courses.splice(id_index, 1);
	}
	saveCart(cart_courses);	
}

function saveCart(cart_courses) {
	sessionStorage.setItem("cart_courses", JSON.stringify(cart_courses);
}







