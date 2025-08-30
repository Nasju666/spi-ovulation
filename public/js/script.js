const bg = document.getElementById('bg');

    document.addEventListener('mousemove', (e) => {
        let x = (e.clientX / window.innerWidth - 0.5) * -100;
        let y = (e.clientY / window.innerHeight - 0.5) * -100;
        let tiltX = (e.clientY / window.innerHeight - 0.5) * -10;
        let tiltY = (e.clientX / window.innerWidth - 0.5) * -10;

        bg.style.transform = `translate(-50%, -50%) scale(1.05) translate(${x}px, ${y}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    let words = [];

    document.addEventListener('DOMContentLoaded', function() {
        // Initialize calendar
        let currentDate = new Date();
        updateCalendar(currentDate);
        
        // Set up event listeners
        document.getElementById('prevMonth').addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendar(currentDate);
        });
        
        document.getElementById('nextMonth').addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendar(currentDate);
        });
        
        document.getElementById('calculateBtn').addEventListener('click', calculateOvulation);
        
        // Set today's date as default for last period
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        document.getElementById('lastPeriod').value = formattedDate;
    });
    
    function updateCalendar(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        
        // Update calendar header
        document.getElementById('currentMonth').textContent = `${monthNames[currentMonth]} ${currentYear}`;
        
        // Get first day of month and number of days in month
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        
        // Generate calendar days
        const calendarGrid = document.getElementById('calendarDays');
        calendarGrid.innerHTML = '';
        
        // Add day labels
        const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        for (let label of dayLabels) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell';
            cell.textContent = label;
            calendarGrid.appendChild(cell);
        }
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell empty';
            calendarGrid.appendChild(cell);
        }
        
        // Add cells for each day of the month
        const lastPeriod = document.getElementById('lastPeriod').value;
        const lastPeriodDate = lastPeriod ? new Date(lastPeriod) : null;
        
        for (let i = 1; i <= daysInMonth; i++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell day';
            cell.textContent = i;
            
            // Check if this day is the selected last period date
            if (lastPeriodDate && 
                currentYear === lastPeriodDate.getFullYear() && 
                currentMonth === lastPeriodDate.getMonth() && 
                i === lastPeriodDate.getDate()) {
                cell.classList.add('selected');
            }
            
            cell.addEventListener('click', function() {
                // Remove selected class from all cells
                document.querySelectorAll('.calendar-cell.selected').forEach(c => {
                    c.classList.remove('selected');
                });
                
                // Add selected class to clicked cell
                cell.classList.add('selected');
                
                // Update the date input
                const selectedDate = new Date(currentYear, currentMonth, i);
                const year = selectedDate.getFullYear();
                const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
                const day = String(selectedDate.getDate()).padStart(2, '0');

                document.getElementById('lastPeriod').value = `${year}-${month}-${day}`;
            });
            
            calendarGrid.appendChild(cell);
        }
    }
    
    function calculateOvulation() {
const lastPeriod = document.getElementById('lastPeriod').value;
const cycleLength = parseInt(document.getElementById('cycleLength').value);

if (!lastPeriod) {
    alert('Please select the first day of your last period.');
    return;
}

// Calculate ovulation 
const lastPeriodDate = new Date(lastPeriod);
const ovulationDate = new Date(lastPeriodDate);
ovulationDate.setDate(ovulationDate.getDate() + cycleLength - 14);

// Calculate fertility
const fertilityStart = new Date(ovulationDate);
fertilityStart.setDate(fertilityStart.getDate() - 5);

const fertilityEnd = new Date(ovulationDate);

// Calculate next period 
const nextPeriod = new Date(lastPeriodDate);
nextPeriod.setDate(nextPeriod.getDate() + cycleLength);


const options = { year: 'numeric', month: 'long', day: 'numeric' };

const formatter = new Intl.DateTimeFormat('en-PH', {
    timeZone: 'Asia/Manila',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

document.getElementById('ovulationDate').textContent = formatter.format(ovulationDate);
document.getElementById('fertilityWindow').textContent = 
    `${formatter.format(fertilityStart)} - ${formatter.format(fertilityEnd)}`;
document.getElementById('nextPeriod').textContent = formatter.format(nextPeriod);

// Show results
document.getElementById('resultsPlaceholder').style.display = 'none';
document.getElementById('results').style.display = 'block';

// === FETCH MOTIVATIONAL QUOTE ===
const quoteText = document.getElementById("quoteText");

quoteText.textContent = "Loading inspirational quote...";

fetch("https://thequoteshub.com/api/")
.then(response => response.json())
.then(data => {
    const allowedTags = ["health", "love", "body", "care"];
    
    // Check if the quote has any of the allowed tags
    const hasAllowedTag = data.tags && data.tags.some(tag => allowedTags.includes(tag.toLowerCase()));
    
    if (hasAllowedTag) {
        quoteText.innerHTML = `<strong>“${data.text}”</strong><br>— <em>${data.author}</em>`;
    } else {
        // If no matching tag, still show the quote
        quoteText.innerHTML = `<strong>“${data.text}”</strong><br>— <em>${data.author}</em>`;
    }
})
.catch(error => {
    console.error("❌ Fetch Error:", error);
    quoteText.textContent = "Take care of your health and well-being every day!";
});

  // ✅ TOGGLE VIEW
  document.querySelector('.form-section').style.display = 'none';
  document.querySelector('.results-section').style.display = 'block';

}    

document.getElementById('calculateAgainBtn').addEventListener('click', function () {
    // Show form section
    document.querySelector('.form-section').style.display = 'block';

    // Hide results section
    document.querySelector('.results-section').style.display = 'none';

    const currentDate = new Date();
    updateCalendar(currentDate);
});