function gradingStudents(grades) {
    // Write your code here
    let final = []
    grades.forEach((item, i) => {


        if ((!((item + 2) % 5) || !((item + 1) % 5)) && ((item + 2 >= 40) || (item + 1 >= 40))) {

            final[i] = (!((item + 2) % 5)) ? ((item + 2)) : ((item + 1))
        } else {
            final[i] = item
        }
    })
    return final

}