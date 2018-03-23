function populateCurrentCourseHTML() {
    var cartCourses = getCartCourses();
    var courses = getAllCourses();
    for(i = 0; i < cartCourses.length; i++) {
        var courseEntryId = "course"+(i+1); 
        var courseEntry = document.getElementById(courseEntryId); 
        var course = courses[cartCourses[i]];
        $('#'+courseEntryId+'title').html(course.title);
        $('#'+courseEntryId+'credits').html('Credits: ' + course.credits);
        $('#'+courseEntryId+'prof').html('Professor: ' + course.professor);
        courseEntry.style.display = 'block';
    }
}	

