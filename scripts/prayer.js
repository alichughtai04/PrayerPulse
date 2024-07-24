document.addEventListener('DOMContentLoaded', () => {
    const fetchTimesBtn = document.getElementById('fetch-times-btn');
    const citySelect = document.getElementById('city');
    const prayerTimesTable = {
        fajr: document.getElementById('fajrtime'),
        dhuhr: document.getElementById('dhuhrtime'),
        asr: document.getElementById('asrtime'),
        maghrib: document.getElementById('maghribtime'),
        isha: document.getElementById('ishatime')
    };

    fetchTimesBtn.addEventListener('click', () => {
        console.log("button clicked")
        const selectedCity = citySelect.value;
        const apiUrl = `http://api.aladhan.com/v1/calendarByCity/2017/4?city=${encodeURIComponent(selectedCity)}&country=United States&method=2`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Extract timings from the API response
                const timings = data.data[0].timings;
                
                // Update the DOM with prayer times
                prayerTimesTable.fajr.textContent = timings.Fajr;
                prayerTimesTable.dhuhr.textContent = timings.Dhuhr;
                prayerTimesTable.asr.textContent = timings.Asr;
                prayerTimesTable.maghrib.textContent = timings.Maghrib;
                prayerTimesTable.isha.textContent = timings.Isha;
            })
            .catch(error => {
                console.error('Error fetching prayer times:', error);
                // Optionally, show an error message to the user
            });
    });
});