function timeConversion(s) {


    let res = ""
    if (s.includes("AM") || s.includes("PM")) {
        let ampm = s.slice(-2);
        const time = s.slice(0, -2).split(":")

        switch (ampm) {
            case "AM":
                time[0] = time[0] == "12" ? "00" : time[0];

                break;
            case "PM":
                time[0] = (time[0] % 12) + 12
                break;
            default:
                console.log("Unable to fetch am pm", ampm)
        }
        return time.join(":")
    } else {
        const time = s.split(":")
        let h = Number(time[0])
        if (h === 0) {
            time[0] = 12;
            res = time.join(":") + "AM"
        } else if (h > 0 && h < 12) {
            res = time.join(":") + "AM"
        } else if (h == 12) {
            res = time.join(":") + "PM"
        } else if (h > 12 && h < 24) {
            time[0] = time[0] - 12
            res = time.join(":") + "PM"
        }

        return res
    }

}

//00-12 Am
//01-1 Am
//12-12 Pm
let res = []
let res1 = []
let time = ["1:05:05PM", "12:05:05AM", "00:05:05", "5:05:05"]
res[0] = timeConversion(time[0])
res[1] = timeConversion(time[1])
res1[0] = timeConversion(time[2])
res1[1] = timeConversion(time[3])
console.log("\n\n")
console.log(time[0], "  res[0]", res[0])
console.log("-----------------------------")
console.log(time[1], " res[1]", res[1])
console.log("-----------------------------")
console.log(time[2], "   res1[0]", res1[0])
console.log("-----------------------------")
console.log(time[3], "    res1[1]", res1[1])
console.log("\n\n")



23 - 12
11