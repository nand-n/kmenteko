// The data/time we want to countdown to
const countDownDate = new Date("Dec 25, 2022 16:37:52").getTime();
// Run myfunc every second
const countDown = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the message when countdown is over
  //   if (timeLeft < 0) {
  //     // if (hours == 0) {
  //     //     hours = 12;
  //     //   }
  //     clearInterval(countDown);
  //     // console.log(days, hours, minutes, seconds, "console loges");
  //     // return quarterData.push(seconds);
  //     return {
  //       days,
  //       hours,
  //       minutes,
  //       seconds,
  //     };
  //   }
  console.log(days, hours, minutes, seconds, "console loges");
}, 1000);

//   if (hours > 12) {
//     hours = hours - 12;
//     session = "PM";
//   }

//   hh = hh < 10 ? "0" + hh : hh;
//   mm = mm < 10 ? "0" + mm : mm;
//   ss = ss < 10 ? "0" + ss : ss;

//   let time = hh + ":" + mm + ":" + ss + " " + session;
