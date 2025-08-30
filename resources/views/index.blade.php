<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ovulation Calculator & Tracker</title>
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>
<img src="{{ asset('images/hear.gif') }}" alt="Background" class="parallax-bg" id="bg">

<div class="modal-container">

    <header>
        <div class="container">
            <h1>Ovulation Calculator & Tracker</h1>
            <p class="subtitle">Your menstrual cycle can vary from month to month. Use this calculator to see when you may be ovulating to find your most fertile days.</p>
        </div>
    </header>

    <div class="container">
        <div class="calculator-container">
            <div class="form-section">
                <h2>Calculate Your Fertility Window</h2>
                
                <div class="form-group">
                    <label for="lastPeriod">Select the first day of your last period</label>
                    <input type="date" id="lastPeriod">
                </div>
                
                <div class="calendar">
                    <div class="calendar-header">
                        <button id="prevMonth" class="button-month">&lt;</button>
                        <h3 id="currentMonth">August 2025</h3>
                        <button id="nextMonth" class="button-month">&gt;</button>
                    </div>
                    <div class="calendar-grid" id="calendarDays">
                    </div>
                </div>
                
                
                <div class="bot-container">
                <div class="form-group left-container">
                    <label for="cycleLength">How Long Is Your Average Cycle?</label>
                    <select id="cycleLength">
                        <option value="21">21 days</option>
                        <option value="22">22 days</option>
                        <option value="23">23 days</option>
                        <option value="24">24 days</option>
                        <option value="25">25 days</option>
                        <option value="26">26 days</option>
                        <option value="27">27 days</option>
                        <option value="28" selected>28 days</option>
                        <option value="29">29 days</option>
                        <option value="30">30 days</option>
                        <option value="31">31 days</option>
                        <option value="32">32 days</option>
                        <option value="33">33 days</option>
                        <option value="34">34 days</option>
                        <option value="35">35 days</option>
                    </select>
                </div>
                
              <div class="right-container">
              <label>Types of Content I'm Interested in: (optional)</label>
                <div class="checkbox-group">
                    <div class="checkbox-item">
                        <label for="planningPregnancy"><p>Planning a Pregnancy</p></label>
                        <input type="checkbox" id="planningPregnancy">
                    </div>
                
                    <div class="checkbox-item">
                        <label for="birthControl"><p>Birth Control</p></label>
                        <input type="checkbox" id="birthControl">                       
                    </div>
                </div>
              </div>  
                </div>
                
                <button id="calculateBtn">Calculate</button>
            </div>
            
            <div class="results-section">
                <h2>Your Results</h2>
                
                <div id="resultsPlaceholder">
                    <p>Enter your information and click Calculate to see your fertility window.</p>
                </div>
                
                <div id="results" style="display: none;">
                    <div class="result-card">
                        <h3>Next Ovulation Date</h3>
                        <div class="result-date" id="ovulationDate">August 14, 2025</div>
                    </div>
                    
                    <div class="result-card">
                        <h3>Your Fertility Window</h3>
                        <p>You're most likely to get pregnant during these 6 days:</p>
                        <div class="result-date" id="fertilityWindow">August 10-15, 2025</div>
                        
                        <div class="fertility-window">
                            <div class="fertility-day medium">Day 1</div>
                            <div class="fertility-day high">Day 2</div>
                            <div class="fertility-day peak">Day 3</div>
                            <div class="fertility-day peak">Day 4</div>
                            <div class="fertility-day high">Day 5</div>
                            <div class="fertility-day medium">Day 6</div>
                        </div>
                    </div>
                    
                    <div class="result-card">
                        <h3>Next Period Expected</h3>
                        <div class="result-date" id="nextPeriod">August 28, 2025</div>
                    </div>
                    
                    <div class="note">
                        <p id="quoteText">Loading inspirational quote...</p>
                    </div>
                    
                    <button id="calculateAgainBtn">Calculate Again</button>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <p>Copyrights © 2025 | All Rights Reserved</p>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
            </div>
        </div>
    </footer>

</div>

<script src="{{ asset('js/script.js') }}"></script>
</body>
</html>