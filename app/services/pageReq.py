async def totalReq(url: str, driver):

    driver.get(url)
    total = driver.execute_script(
        "return performance.getEntriesByType('resource').length;"
    )

    resource_names = driver.execute_script(
        "let entries = performance.getEntriesByType('resource');"
        "let names = entries.map(entry => entry.name);"
        "return names;"
    )

    for name in resource_names:
        print(name)

    return total 