window.addEventListener('load', () => {
  console.log(document.readyState);
  const progressBar = document.querySelectorAll('.progress-bar');

  function calculateTime(time, dataCount) {
    return time / dataCount;
  }

  progressBar.forEach((element) => {
    const label = element.children[0];
    const line = element.children[1];
    const dataCount = label.getAttribute("data-count");
    const lineCount = line.children[0];

    const time = 1500;
    const runTimePerOneUnit = calculateTime(time, dataCount);
    let startCount = 0;
    const animationLineCount = setInterval(() => {
      if (startCount < dataCount) {
        startCount++;
        label.innerHTML = `${startCount}%`;
        lineCount.style.width = `${startCount}%`;
      }
      if (startCount <= 30) {
        lineCount.style.boxShadow = '0px 0px 20px 3px #ff0000';
        lineCount.style.background = '#ff0000';
      } else if (startCount <= 60) {
        lineCount.style.boxShadow = '0px 0px 20px 3px #ff9900';
        lineCount.style.background = '#ff9900';
      } else if (startCount <= 99) {
        lineCount.style.boxShadow = '0px 0px 20px 3px aqua';
        lineCount.style.background = 'aqua';
      } else {
        lineCount.style.boxShadow = '0px 0px 20px 3px #00ff00';
        lineCount.style.background = '#00ff00';
      }
    }, runTimePerOneUnit);

  });
});