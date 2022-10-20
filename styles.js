import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 15,
    // paddingBottom: 0,
  },
  map: {
    flex: 1,
  },
  categoryContainer: {
    padding: 10,
  },
  categoryItem: {
    height: 110,
    backgroundColor: '#f0f0f5',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryText: {
    textAlign: 'center',
    color: '#6c6c80',
  },
  selectedCategory: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#322153',
  },
  filters: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  searchdiv: {
    flexDirection: 'row',
    padding: 6,
    paddingLeft: 10,
    backgroundColor: '#d1d1d1',
    borderRadius: 50,
    width: '48%',
    margin: '1%',
  },
  search: {
    marginLeft: 5,
    width: '75%',
    fontSize: 17,
  },
  filterdiv: {
    width: '48%',
    margin: '1%',
  },
  picker: {
    width: '100%',
    height: '100%',
    fontSize: 17,
  },
  listItem: {
    width: '100%',
    height: 110,
    borderStyle: 'solid',
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 4,
  },
  titleunidade: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  descunidade: {
    fontSize: 13,
    marginBottom: 10,
  },
  tempounidade: {
    fontSize: 13,
    marginBottom: 10,
    fontWeight: 600,
  },
  infos: {
    width: '85%',
  },
  statustempo: {
    width: '10%',
    justifyContent: 'center',
    marginLeft: 5,
  },
  inputs: {
    flex: 1,
    width: '80%',
    flexDirection: 'column',
  },
  inputView: {
    width: '100%',
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 7,
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 0,
  },
  rnmodalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rnmodalButton: {
    backgroundColor: '#2196f3',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  unidade: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 4,
    backgroundColor: 'white',
  },
  avaliacao: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 4,
  },
  button: {
    width: '80%',
    padding: 10,
    textTransform: 'uppercase',
    backgroundColor: "#2196f3",
    marginVertical: 10,
  }
});

export { styles };
