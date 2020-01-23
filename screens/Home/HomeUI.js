export default Home = () => {
    return (
        <View style={{flex: 1, width: '100%'}}>
            <Text style={{
                    fontSize: 17, fontWeight: '800', 
                    color: 'rgb(100, 160, 240)', padding: 10,
                    textAlign: 'left'
                }}
            >
                {`${getMonthName(moment().month()+1)} ${moment().year()}`}
            </Text>
            <TableHeader values={[SUN(), MON(), TUE(), WED(), THU(), FRI(), SAT()]}/>
            <Divider />
            <Table />
            {/* {days.map(
                val => {
                    return <Box label={val}></Box>
                }
            )} */}
        </View>
    )
}