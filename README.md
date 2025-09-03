# Ovulation Calculator & Tracker

## 📌 Overview   
The **Ovulation Calculator & Tracker** is a Laravel-based web application that helps users track their menstrual cycle, calculate ovulation dates, estimate fertility windows, and predict the next expected period.  
It also provides motivational health quotes to encourage well-being.  

This system is useful for users who are **planning pregnancy** or simply **monitoring their reproductive health**.

---

## ⚙️ API Description & Features  

## ✨ Features  
- 📅 **Interactive Calendar** – Select the first day of your last period directly from the calendar.  
- ⏳ **Cycle Length Customization** – Choose your average cycle length (21–35 days).  
- 🌸 **Fertility Window Prediction** – Displays the most fertile 6 days, including peak days.  
- 🔮 **Ovulation & Next Period Date** – Automatically calculates expected ovulation and next period.  
- 💡 **Motivational Quotes** – Fetches inspirational health and wellness quotes for encouragement.  
- 🔁 **Recalculate Easily** – Option to go back and input new details anytime.  

---

## 🚀 Usage  
1. Open the application in your browser.  
2. Select the **first day of your last period** using the date input or calendar.  
3. Enter your **average cycle length**.  
4. (Optional) Tick content preferences such as *Planning Pregnancy* or *Birth Control*.  
5. Click **Calculate**.  
6. View your results:  
   - **Next Ovulation Date**  
   - **Fertility Window (6-day range)**  
   - **Next Expected Period**  
   - **Motivational Quote**  
7. Click **Calculate Again** if you want to reset and try another input.  

---

### 🔑 Endpoints & APIs  

This project uses two types of APIs:  

#### 1. **Web API (Browser DOM API)**  
The application leverages the built-in **Web API** to dynamically update and interact with the page. Key functions include:  
- `document.getElementById()` → Access elements such as date input, cycle length, and results containers.  
- `document.querySelector()` → Select elements like buttons and result placeholders.  
- `addEventListener()` → Handle user actions such as clicking buttons, navigating the calendar, or recalculating results.  
- `Date()` → JavaScript’s built-in date API to calculate ovulation, fertility window, and next period.  

##### Example (Web API usage):  
```javascript
document.getElementById('calculateBtn').addEventListener('click', calculateOvulation);

function calculateOvulation() {
  const lastPeriod = document.getElementById('lastPeriod').value;
  const cycleLength = parseInt(document.getElementById('cycleLength').value);

  // Calculate ovulation date
  const lastPeriodDate = new Date(lastPeriod);
  const ovulationDate = new Date(lastPeriodDate);
  ovulationDate.setDate(ovulationDate.getDate() + cycleLength - 14);

  document.getElementById('ovulationDate').textContent = ovulationDate.toDateString();
}
```

---

#### 2. **External Quotes API**  
The system integrates with a **third-party quotes API** to display motivational health quotes.  

- **GET** `https://thequoteshub.com/api/`  
  - Returns a random inspirational quote in JSON format.  

##### Example Response:  
```json
{
  "text": "Take care of your body. It's the only place you have to live.",
  "author": "Jim Rohn",
  "tags": ["health", "body", "care"]
}
```

---


## 🛠️ Installation & Setup  

### Requirements  
- PHP 8.x  
- Composer  
- Laravel Framework (latest)  
- Node.js & npm (for frontend assets)  

### Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/spi-ovulation.git
   cd spi-ovulation
   ```

2. Install dependencies:  
   ```bash
   composer install
   npm install
   ```

3. Copy `.env.example` to `.env` and configure your environment:  
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. Run migrations (if database features are added later):  
   ```bash
   php artisan migrate
   ```

5. Start the development server:  
   ```bash
   php artisan serve
   ```

6. Open in browser:  
   ```
   http://127.0.0.1:8000
   ```

---

## 📂 Project Structure  
```
📦 spi-ovulation
 ┣ 📂 public
 ┃ ┣ 📂 css             # Stylesheets
 ┃ ┣ 📂 images          # Assets (e.g., hear.gif)
 ┃ ┣ 📂 js              # JavaScript files
 ┃ ┣ 📜 index.php       # Laravel entry point
 ┣ 📂 resources
 ┃ ┣ 📂 views
 ┃ ┃ ┗ 📜 index.blade.php  # Main app UI
 ┣ 📂 routes
 ┃ ┣ 📜 web.php         # Routes definition
 ┣ 📜 README.md         # Documentation
```

---

## ⚠️ Disclaimer  
This tool is intended for **educational and informational purposes only**.  
It should not be used as a substitute for medical advice.  
For personal health or family planning decisions, consult a licensed healthcare provider.  
