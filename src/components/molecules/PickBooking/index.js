import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import {IconDateGrey, IconLocGrey, IconPersonGrey} from '../../../assets';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';
import moment from 'moment';
import DateRangePicker from '../DateRangePicker';

const Pick = ({icon, title, onPress}) => {
  return (
    <View style={styles.pick}>
      <TouchableOpacity
        style={styles.linePick}
        activeOpacity={0.3}
        onPress={onPress}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};

const PickBooking = ({onPress}) => {
  const [showModalDate, setShowModalDate] = useState(false);
  const [showModalLoc, setShowModalLoc] = useState(false);
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  const toggleModal = () => {
    setShowModalLoc(!showModalLoc);
  };

  const toggleModalCalendar = () => {
    setShowModalDate(!showModalDate);
  };

  return (
    <>
      <View style={styles.container}>
        <Pick
          title="Jakarta"
          icon={<IconLocGrey />}
          onPress={() => setShowModalLoc(true)}
        />
        <Pick
          title="7 Oct 2022 -  8 Oct 2022 "
          icon={<IconDateGrey />}
          onPress={() => setShowModalDate(true)}
        />
        <Pick title="1 Room, 1 Adult, 0 Children" icon={<IconPersonGrey />} />
        <Gap height={15} />
        <TouchableOpacity
          style={styles.containerButton}
          activeOpacity={0.7}
          onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.search}>Cari</Text>
          </View>
          <Gap height={15} />
        </TouchableOpacity>
      </View>

      {/* Modal Date */}
      <Modal visible={showModalDate} backdropColor="transparent">
        <View>
          <Calendar
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,

              borderRadius: 15,
            }}
            onDayPress={day => {
              console.log(day);
              if (startDay && !endDay) {
                const date = {};
                for (
                  const d = moment(startDay);
                  d.isSameOrBefore(day.dateString);
                  d.add(1, 'days')
                ) {
                  date[d.format('YYYY-MM-DD')] = {
                    marked: true,
                    color: colors.primary,
                    textColor: 'white',
                  };

                  if (d.format('YYYY-MM-DD') === startDay)
                    date[d.format('YYYY-MM-DD')].startingDay = true;
                  if (d.format('YYYY-MM-DD') === day.dateString)
                    date[d.format('YYYY-MM-DD')].endingDay = true;
                }

                setMarkedDates(date);
                setEndDay(day.dateString);
              } else {
                setStartDay(day.dateString);
                setEndDay(null);
                setMarkedDates({
                  [day.dateString]: {
                    marked: true,
                    color: colors.primary,
                    textColor: 'white',
                    startingDay: true,
                    endingDay: true,
                  },
                });
              }
            }}
            monthFormat={'MMM yyyy'}
            hideDayNames={false}
            markingType={'period'}
            markedDates={markedDates}
            theme={{
              selectedDayBackgroundColor: colors.primary,
              selectedDayTextColor: 'white',
              monthTextColor: colors.primary,
              dayTextColor: 'black',
              textMonthFontSize: 18,
              textDayHeaderFontSize: 16,
              arrowColor: colors.secondary,
              dotColor: colors.white,
            }}
          />
          <Button title="OK" onPress={toggleModalCalendar} />
        </View>
      </Modal>

      {/* Modal Location */}

      <Modal visible={showModalLoc}>
        <View style={styles.wrapperModalLoc}>
          <Text>Text</Text>
        </View>
        <Button title="X" onPress={toggleModal} />
      </Modal>
    </>
  );
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default PickBooking;

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    flex: 1,
    width: WIDTH * 0.77,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 1},
    backgroundColor: colors.white,
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  text: {
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
    fontSize: 14,
    paddingLeft: 15,
  },
  line: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    width: WIDTH * 0.68,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pick: {
    justifyContent: 'center',
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
  },
  search: {
    fontFamily: fonts.primary[400],
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingVertical: 5,
  },
  linePick: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 17,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  wrapperModalLoc: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 5,
  },
});
