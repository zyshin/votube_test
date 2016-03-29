# -*- coding: utf-8 -*-
import json, sys, codecs
from urlparse import urlparse, parse_qs

url = '/vocabulary/?pid=3&id=000001011111000001011111000001011111&end=36&start=0&result=%5B%7B%22type%22%3A0%2C%22answer%22%3A%22%E9%BB%91%E9%AC%BC%22%2C%22time%22%3A3376%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E5%8F%96%E7%BC%94%22%2C%22time%22%3A4545%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E5%86%9B%E5%AE%98%22%2C%22time%22%3A3969%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E5%BC%AF%E7%9A%84%22%2C%22time%22%3A3841%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E7%98%B8%E5%AD%90%22%2C%22time%22%3A4537%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A1%2C%22time%22%3A10528%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E7%94%A8%E5%85%B7%22%2C%22time%22%3A6399%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A0%2C%22time%22%3A4848%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A%22lucrative%22%2C%22time%22%3A6607%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A0%2C%22time%22%3A20816%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A1%2C%22time%22%3A4440%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A0%2C%22time%22%3A3325%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E6%BA%9C%22%2C%22time%22%3A5447%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E5%BC%AF%22%2C%22time%22%3A12720%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E5%8D%B1%E9%99%A9%22%2C%22time%22%3A4191%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E9%92%9B%22%2C%22time%22%3A4799%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A0%2C%22time%22%3A9431%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A1%2C%22time%22%3A4304%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E5%9E%AE%E4%B8%96%E4%BB%A3%22%2C%22time%22%3A5400%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A1%2C%22time%22%3A3329%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A%22assail%22%2C%22time%22%3A7847%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A0%2C%22time%22%3A9263%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A%22bake%22%2C%22time%22%3A2840%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A1%2C%22time%22%3A6657%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E6%B2%B9%E7%84%96%22%2C%22time%22%3A7191%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E7%82%92%22%2C%22time%22%3A4592%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E7%83%AD%E8%AF%9A%E7%9A%84%22%2C%22time%22%3A7152%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E6%8E%92%22%2C%22time%22%3A7503%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A%22%E5%8D%87%E7%BA%A7%22%2C%22time%22%3A3320%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A%22croon%22%2C%22time%22%3A7327%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A0%2C%22answer%22%3A1%2C%22time%22%3A3511%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A1%2C%22time%22%3A3632%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A%22retreat%22%2C%22time%22%3A3391%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A0%2C%22time%22%3A3752%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A%22cripple%22%2C%22time%22%3A4391%2C%22events%22%3A%5B%5D%7D%2C%7B%22type%22%3A1%2C%22answer%22%3A1%2C%22time%22%3A3856%2C%22events%22%3A%5B%5D%7D%5D'
def parse(url):
    params = parse_qs(urlparse(url).query)
    print 'parsed pid:', params['pid'][0]
    return json.loads(params['result'][0])

if len(sys.argv) < 3:
    print 'usage for test: python parse.py test.txt result.txt'
    print 'usage for 3-session learning: python parse.py learn.txt result.txt learn'
    exit()

path = sys.argv[1]
opath = sys.argv[2]
with open(path) as fin:
    lines = [l.split()[2] for l in fin.readlines()]
if len(sys.argv) > 3:   # 3-session learning
    if sys.argv[3] == 'learn':
        lines = [l for l in lines if l.startswith('/learn/?pid=')]
    else:
        lines = [l for l in lines if l.startswith('/vocabulary/?pid=')]
    # print lines
    results = [parse(s1) + parse(s2) + parse(s3) for s1, s2, s3 in zip(*([iter(lines)] * 3))]
    if sys.argv[3] == 'learn':
        for r in results:
            for o in r:
                o['hint'] = sum([1 for e in o['events'] if e['type'] == 'hint'])
                o['click'] = sum([1 for e in o['events'] if e['type'] == 'part'])
                o['replay'] = sum([1 for e in o['events'] if e['type'] == 'replay'])
else:
    results = [parse(l) for l in lines]

# for r in results:
#     print '\t'.join([unicode(o['answer']) for o in r])
    
with codecs.open(opath, 'w', 'utf-8') as fout:
    fout.writelines('\t'.join(['\t'.join([str(o['time']) for o in r]) for r in results]) + '\n')
    if len(sys.argv) > 3 and sys.argv[3] == 'learn':
        fout.writelines('\t'.join(['\t'.join([str(o['hint']) for o in r]) for r in results]) + '\n')
        fout.writelines('\t'.join(['\t'.join([str(o['click']) for o in r]) for r in results]) + '\n')
        fout.writelines('\t'.join(['\t'.join([str(o['replay']) for o in r]) for r in results]) + '\n')
    else:
        fout.writelines(['\t'.join([unicode(o['answer']) for o in r]) + '\n' for r in results])
