from datetime import datetime, timedelta

def ist_to_pst(ist_time_str):
    ist_time = datetime.strptime(ist_time_str, "%Y-%m-%d %H:%M:%S")
    
    time_difference = timedelta(hours=13, minutes=30)
    pst_time = ist_time - time_difference
    
    pst_time_str = pst_time.strftime("%Y-%m-%d %H:%M:%S")
    return pst_time_str
