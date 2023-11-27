function playSelectedTracks() {
    var maxCurrentTime = getMaxCurrentTime();
    var longestDuration = getLongestTrackDuration();
    stopAllTracks();playIfChecked('8bit_early_drums.', 'audio8bit_early_drums.', maxCurrentTime);playIfChecked('8bit_early_main.', 'audio8bit_early_main.', maxCurrentTime);playIfChecked('8bit_late_drums.', 'audio8bit_late_drums.', maxCurrentTime);playIfChecked('8bit_late_main.', 'audio8bit_late_main.', maxCurrentTime);playIfChecked('country_early_drums.', 'audiocountry_early_drums.', maxCurrentTime);playIfChecked('country_early_main.', 'audiocountry_early_main.', maxCurrentTime);playIfChecked('country_late_drums.', 'audiocountry_late_drums.', maxCurrentTime);playIfChecked('country_late_main.', 'audiocountry_late_main.', maxCurrentTime);playIfChecked('death1.', 'audiodeath1.', maxCurrentTime);playIfChecked('death2.', 'audiodeath2.', maxCurrentTime);playIfChecked('death3.', 'audiodeath3.', maxCurrentTime);playIfChecked('death4.', 'audiodeath4.', maxCurrentTime);playIfChecked('death5.', 'audiodeath5.', maxCurrentTime);playIfChecked('death6.', 'audiodeath6.', maxCurrentTime);playIfChecked('disco_early_drums.', 'audiodisco_early_drums.', maxCurrentTime);playIfChecked('disco_early_main.', 'audiodisco_early_main.', maxCurrentTime);playIfChecked('disco_late_drums.', 'audiodisco_late_drums.', maxCurrentTime);playIfChecked('disco_late_main.', 'audiodisco_late_main.', maxCurrentTime);playIfChecked('edm_early_drums.', 'audioedm_early_drums.', maxCurrentTime);playIfChecked('edm_early_main.', 'audioedm_early_main.', maxCurrentTime);playIfChecked('edm_late_drums.', 'audioedm_late_drums.', maxCurrentTime);playIfChecked('edm_late_main.', 'audioedm_late_main.', maxCurrentTime);playIfChecked('emo_early_drums.', 'audioemo_early_drums.', maxCurrentTime);playIfChecked('emo_early_main.', 'audioemo_early_main.', maxCurrentTime);playIfChecked('emo_late_drums.', 'audioemo_late_drums.', maxCurrentTime);playIfChecked('emo_late_main.', 'audioemo_late_main.', maxCurrentTime);playIfChecked('heartsteel_early_drums.', 'audioheartsteel_early_drums.', maxCurrentTime);playIfChecked('heartsteel_early_main.', 'audioheartsteel_early_main.', maxCurrentTime);playIfChecked('heartsteel_early_secondary.', 'audioheartsteel_early_secondary.', maxCurrentTime);playIfChecked('heartsteel_late_drums.', 'audioheartsteel_late_drums.', maxCurrentTime);playIfChecked('heartsteel_late_main.', 'audioheartsteel_late_main.', maxCurrentTime);playIfChecked('heartsteel_late_secondary.', 'audioheartsteel_late_secondary.', maxCurrentTime);playIfChecked('hyperpop_early.', 'audiohyperpop_early.', maxCurrentTime);playIfChecked('hyperpop_late.', 'audiohyperpop_late.', maxCurrentTime);playIfChecked('hyperpop_late_drums.', 'audiohyperpop_late_drums.', maxCurrentTime);playIfChecked('illbeats_early.', 'audioillbeats_early.', maxCurrentTime);playIfChecked('illbeats_late.', 'audioillbeats_late.', maxCurrentTime);playIfChecked('jazz_early_main.', 'audiojazz_early_main.', maxCurrentTime);playIfChecked('jazz_late_main.', 'audiojazz_late_main.', maxCurrentTime);playIfChecked('kda_early_drums.', 'audiokda_early_drums.', maxCurrentTime);playIfChecked('kda_early_main.', 'audiokda_early_main.', maxCurrentTime);playIfChecked('kda_early_secondary.', 'audiokda_early_secondary.', maxCurrentTime);playIfChecked('kda_late_drums.', 'audiokda_late_drums.', maxCurrentTime);playIfChecked('kda_late_main.', 'audiokda_late_main.', maxCurrentTime);playIfChecked('kda_late_secondary.', 'audiokda_late_secondary.', maxCurrentTime);playIfChecked('maestro_early.', 'audiomaestro_early.', maxCurrentTime);playIfChecked('maestro_late.', 'audiomaestro_late.', maxCurrentTime);playIfChecked('mixmaster_early.', 'audiomixmaster_early.', maxCurrentTime);playIfChecked('pentakill_early_drums.', 'audiopentakill_early_drums.', maxCurrentTime);playIfChecked('pentakill_early_main.', 'audiopentakill_early_main.', maxCurrentTime);playIfChecked('pentakill_early_secondary.', 'audiopentakill_early_secondary.', maxCurrentTime);playIfChecked('pentakill_late_drums.', 'audiopentakill_late_drums.', maxCurrentTime);playIfChecked('pentakill_late_main.', 'audiopentakill_late_main.', maxCurrentTime);playIfChecked('pentakill_late_secondary.', 'audiopentakill_late_secondary.', maxCurrentTime);playIfChecked('piano_early.', 'audiopiano_early.', maxCurrentTime);playIfChecked('piano_late.', 'audiopiano_late.', maxCurrentTime);playIfChecked('punk_early_drums.', 'audiopunk_early_drums.', maxCurrentTime);playIfChecked('punk_early_main.', 'audiopunk_early_main.', maxCurrentTime);playIfChecked('punk_late_drums.', 'audiopunk_late_drums.', maxCurrentTime);playIfChecked('punk_late_main.', 'audiopunk_late_main.', maxCurrentTime);playIfChecked('starting_carousel.', 'audiostarting_carousel.', maxCurrentTime);playIfChecked('truedamage_early_drums.', 'audiotruedamage_early_drums.', maxCurrentTime);playIfChecked('truedamage_early_main.', 'audiotruedamage_early_main.', maxCurrentTime);playIfChecked('truedamage_early_secondary.', 'audiotruedamage_early_secondary.', maxCurrentTime);playIfChecked('truedamage_late_drums.', 'audiotruedamage_late_drums.', maxCurrentTime);playIfChecked('truedamage_late_main.', 'audiotruedamage_late_main.', maxCurrentTime);playIfChecked('truedamage_late_secondary.', 'audiotruedamage_late_secondary.', maxCurrentTime);
setTimeout(function() {
        playAllSelectedTracks(maxCurrentTime);
    }, longestDuration * 1000); // Convert to milliseconds
}

function playAllSelectedTracks(startTime) {
    // List of tracks (you might want to move this to a more global scope or derive it dynamically)
    var tracks = ['8bit_early_drums.', '8bit_early_main.', /* ... other track IDs ... */ 'truedamage_late_secondary.'];

    tracks.forEach(function(track) {
        playIfChecked(track, 'audio' + track, startTime);
    });
}

function playIfChecked(trackCheckboxId, audioId, startTime) {
    var track = document.getElementById(trackCheckboxId);
    var audio = document.getElementById(audioId);
    if (track && track.checked) {
        audio.currentTime = startTime;
        audio.play();
    }
}

function getLongestTrackDuration() {
    var allAudioElements = document.getElementsByTagName('audio');
    var longestDuration = 0;
    for (var i = 0; i < allAudioElements.length; i++) {
        if (allAudioElements[i].parentNode.querySelector('input[type="checkbox"]').checked) {
            longestDuration = Math.max(longestDuration, allAudioElements[i].duration);
        }
    }
    return longestDuration;
}

function getMaxCurrentTime() {
    var allAudioElements = document.getElementsByTagName('audio');
    var maxTime = 0;
    for (var i = 0; i < allAudioElements.length; i++) {
        maxTime = Math.max(maxTime, allAudioElements[i].currentTime);
    }
    return maxTime;
}

function stopAllTracks() {
    var allAudioElements = document.getElementsByTagName('audio');
    for (var i = 0; i < allAudioElements.length; i++) {
        allAudioElements[i].pause();
        allAudioElements[i].currentTime = 0;
    }
}

function setGlobalVolume(value) {
    var allAudioElements = document.getElementsByTagName('audio');
    for (var i = 0; i < allAudioElements.length; i++) {
        allAudioElements[i].volume = value;
    }
}

function randomSelectTracks() {
    clearAllSelections();
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var maxSelect = Math.min(5, checkboxes.length);

    for (var i = 0; i < maxSelect; i++) {
        var randomIndex = Math.floor(Math.random() * checkboxes.length);
        checkboxes[randomIndex].checked = true;
    }
}

function clearAllSelections() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}

function generateShareableLink() {
    var checkboxes = document.querySelectorAll('.trait input[type="checkbox"]');
    var selectedTracks = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedTracks.push(checkbox.id);
        }
    });

    var url = window.location.href.split('?')[0];
    url += '?selectedTracks=' + selectedTracks.join(',') + ',';

    navigator.clipboard.writeText(url).then(function() {
        alert("Mix URL copied to clipboard!");
    })
    .catch(function(error) {
        console.error("Error copying URL: ", error);
    });
}

function tweetMix() {
    var checkboxes = document.querySelectorAll('.trait input[type="checkbox"]');
    var selectedTracks = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedTracks.push(checkbox.id);
        }
    });

    var url = window.location.href.split('?')[0]; 
    url += '?selectedTracks=' + selectedTracks.join(',');

    var twitterUrl = 'https://twitter.com/intent/tweet?text=Check out my TFT remix rumble music mix!: ' + encodeURIComponent(url) + '&hashtags=TFT,TFTRemixRumble';
    window.open(twitterUrl, '_blank').focus();
}

function setTracksFromURL() {
    var params = new URLSearchParams(window.location.search);
    var selectedTracks = params.get('selectedTracks');

    if (selectedTracks) {
        selectedTracks.split(',').forEach(function(trackId) {
            var checkbox = document.getElementById(trackId);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }
}

setTracksFromURL();
