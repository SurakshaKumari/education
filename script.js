
document.getElementById('tuitionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    });

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
});

function calculateFees() {
    const courses = parseInt(document.getElementById('courses').value);
    const degree = document.getElementById('degree').value;

    let feesPerCourse;
    if (degree === 'Undergraduate') {
      feesPerCourse = 1000;
    } else if (degree === 'Graduate') {
      feesPerCourse = 1500;
    } else if (degree === 'Postgraduate') {
      feesPerCourse = 2000;
    }

    const totalFees = feesPerCourse * courses;

    document.getElementById('result').innerText = `Total Tuition Fees: $${totalFees}`;
  }
