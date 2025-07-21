// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// Chart.js configurations
const salesCtx = document.getElementById('salesChart').getContext('2d');
const visitorsCtx = document.getElementById('visitorsChart').getContext('2d');

const salesChart = new Chart(salesCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales (₦)',
            data: [120000, 150000, 100000, 180000, 160000, 200000],
            backgroundColor: '#3b82f6',
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: { display: false },
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: value => `₦${value / 1000}k`
                }
            }
        }
    }
});

const visitorsChart = new Chart(visitorsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Website Visitors',
            data: [500, 700, 600, 900, 800, 1100],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#10b981'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: { display: false },
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Animated Counters using data-target
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter-number[data-target]');
    const speed = 50; // Lower = faster animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/,/g, '');

            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = (count + increment).toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    });
});
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
