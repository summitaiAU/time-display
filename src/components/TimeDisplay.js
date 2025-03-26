import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/timeStyles';

const TimeDisplay = () => {
  // State to hold current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format hours to ensure two digits
  const formatTwoDigits = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const hours = formatTwoDigits(currentTime.getHours());
  const minutes = formatTwoDigits(currentTime.getMinutes());
  const seconds = formatTwoDigits(currentTime.getSeconds());

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{hours}:{minutes}:{seconds}</Text>
    </View>
  );
};

export default TimeDisplay;