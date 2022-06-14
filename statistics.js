statistics = [
  "46% of gardens are overwatered",
  "Carrots are the most popular vegetable",
  "8 out of 10 people grow roses",
  "People spend an average of 4 hours each week in their garden"
]

current = 0;

statisticElement = document.getElementById('statistic');

function showNext() {
  statisticElement.innerHTML = statistics[current];
  current = current + 1;
  
  if (current == statistics.length) {
    current = 0;
  }
    
}

showNext();
